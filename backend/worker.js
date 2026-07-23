/**
 * AURA Game — Cloudflare Worker
 *
 * Routes:
 *   GET  /api/health               → { ok: true }
 *   GET  /api/puzzle/today         → today's puzzle { idx, answer, category, aura, clues }
 *   GET  /api/puzzle/:idx          → puzzle by index (for archive replays)
 *   POST /api/puzzle               → save a new puzzle (requires Authorization: Bearer ADMIN_TOKEN)
 *   POST /api/result               → record a played result for global stats
 *   GET  /api/stats/:idx           → { total, wins, distribution[5] }
 *   POST /api/push/subscribe       → save a Web Push subscription
 *   DELETE /api/push/subscribe     → remove a Web Push subscription
 *
 * Cron (wrangler.toml): "0 7 * * *" → send daily push to all subscribers
 *
 * KV bindings (set in wrangler.toml):
 *   AURA_PUZZLES — puzzle data, key: "puzzle:{idx}", count at "puzzles:count"
 *   AURA_STATS   — puzzle stats, key: "stats:{puzzleIdx}"
 *   AURA_SUBS    — push subscriptions, key: "sub:{endpointHash}"
 *
 * Secrets (wrangler secret put):
 *   ADMIN_TOKEN        — any long random string; required to POST /api/puzzle
 *   VAPID_PUBLIC_KEY   — from `npm run generate-keys`
 *   VAPID_PRIVATE_KEY  — from `npm run generate-keys`
 *   VAPID_EMAIL        — mailto: contact address (e.g. mailto:you@example.com)
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;
    const method = request.method;

    // CORS — allow any origin (game is static; no credentials needed)
    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    if (method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    function json(data, status = 200) {
      return new Response(JSON.stringify(data), {
        status,
        headers: { ...cors, 'Content-Type': 'application/json' },
      });
    }

    try {
      // ── GET /api/health ────────────────────────────────────────────────────
      if (pathname === '/api/health' && method === 'GET') {
        return json({ ok: true });
      }

      // ── GET /api/puzzle/today ──────────────────────────────────────────────
      if (pathname === '/api/puzzle/today' && method === 'GET') {
        const count = parseInt(await env.AURA_PUZZLES.get('puzzles:count') || '0', 10);
        if (count === 0) return json({ error: 'no puzzles in database' }, 404);
        const epoch = new Date('2025-01-01T00:00:00Z');
        const idx = Math.floor((Date.now() - epoch) / 86400000) % count;
        const raw = await env.AURA_PUZZLES.get(`puzzle:${idx}`);
        if (!raw) return json({ error: 'puzzle not found' }, 404);
        return json({ idx, ...JSON.parse(raw) });
      }

      // ── GET /api/puzzle/:idx ───────────────────────────────────────────────
      const puzzleMatch = pathname.match(/^\/api\/puzzle\/(\d+)$/);
      if (puzzleMatch && method === 'GET') {
        const idx = parseInt(puzzleMatch[1], 10);
        const raw = await env.AURA_PUZZLES.get(`puzzle:${idx}`);
        if (!raw) return json({ error: 'puzzle not found' }, 404);
        return json({ idx, ...JSON.parse(raw) });
      }

      // ── POST /api/puzzle ───────────────────────────────────────────────────
      // Body: { answer, category, aura, clues: (string | { type: 'image', src, alt })[5] }
      // Requires: Authorization: Bearer <ADMIN_TOKEN>
      if (pathname === '/api/puzzle' && method === 'POST') {
        const auth = request.headers.get('Authorization') || '';
        if (!env.ADMIN_TOKEN || auth !== `Bearer ${env.ADMIN_TOKEN}`) {
          return json({ error: 'unauthorized' }, 401);
        }

        const body = await request.json();
        const { answer, category, aura, clues } = body;

        if (!answer || !category || !aura || !Array.isArray(clues) || clues.length !== 5) {
          return json({ error: 'invalid puzzle — requires answer, category, aura, clues[5]' }, 400);
        }
        const isValidClue = c => (typeof c === 'string' && c.trim())
          || (c && typeof c === 'object' && c.type === 'image' && typeof c.src === 'string' && c.src.trim());
        if (clues.some(c => !isValidClue(c))) {
          return json({ error: 'all 5 clues must be non-empty strings or { type: "image", src, alt }' }, 400);
        }

        const count = parseInt(await env.AURA_PUZZLES.get('puzzles:count') || '0', 10);
        const newIdx = count;
        await env.AURA_PUZZLES.put(`puzzle:${newIdx}`, JSON.stringify({ answer, category, aura, clues }));
        await env.AURA_PUZZLES.put('puzzles:count', String(newIdx + 1));

        return json({ ok: true, idx: newIdx, total: newIdx + 1 });
      }

      // ── POST /api/result ───────────────────────────────────────────────────
      // Body: { puzzleIdx: number, won: boolean, cluesUsed: number }
      if (pathname === '/api/result' && method === 'POST') {
        const body = await request.json();
        const { puzzleIdx, won, cluesUsed } = body;

        if (typeof puzzleIdx !== 'number' || typeof won !== 'boolean') {
          return json({ error: 'invalid body' }, 400);
        }

        const key = `stats:${puzzleIdx}`;
        const raw = await env.AURA_STATS.get(key);
        const stats = raw
          ? JSON.parse(raw)
          : { total: 0, wins: 0, distribution: [0, 0, 0, 0, 0] };

        stats.total++;
        if (won) {
          stats.wins++;
          const idx = Math.min(Math.max((cluesUsed || 1) - 1, 0), 4);
          stats.distribution[idx]++;
        }

        await env.AURA_STATS.put(key, JSON.stringify(stats));
        return json({ ok: true, stats });
      }

      // ── GET /api/stats/:idx ────────────────────────────────────────────────
      const statsMatch = pathname.match(/^\/api\/stats\/(\d+)$/);
      if (statsMatch && method === 'GET') {
        const idx = parseInt(statsMatch[1], 10);
        const raw = await env.AURA_STATS.get(`stats:${idx}`);
        if (!raw) return json({ total: 0, wins: 0, distribution: [0, 0, 0, 0, 0] });
        return json(JSON.parse(raw));
      }

      // ── POST /api/push/subscribe ───────────────────────────────────────────
      // Body: Web Push subscription JSON (endpoint, keys.p256dh, keys.auth)
      if (pathname === '/api/push/subscribe' && method === 'POST') {
        const sub = await request.json();
        if (!sub.endpoint) return json({ error: 'missing endpoint' }, 400);
        const hash = await sha256(sub.endpoint);
        await env.AURA_SUBS.put(`sub:${hash}`, JSON.stringify(sub), {
          expirationTtl: 60 * 60 * 24 * 365, // renew yearly
        });
        return json({ ok: true });
      }

      // ── DELETE /api/push/subscribe ─────────────────────────────────────────
      // Body: { endpoint: string }
      if (pathname === '/api/push/subscribe' && method === 'DELETE') {
        const body = await request.json();
        if (!body.endpoint) return json({ error: 'missing endpoint' }, 400);
        const hash = await sha256(body.endpoint);
        await env.AURA_SUBS.delete(`sub:${hash}`);
        return json({ ok: true });
      }

      return json({ error: 'not found' }, 404);
    } catch (err) {
      return json({ error: err.message }, 500);
    }
  },

  // ── CRON: daily push notification ─────────────────────────────────────────
  // Triggered by "0 7 * * *" in wrangler.toml (7:00 UTC, just after midnight US West)
  async scheduled(event, env) {
    const today = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      timeZone: 'UTC',
    });

    const payload = JSON.stringify({
      title: 'AURA',
      body: `Today's aura is ready. Can you feel it?`,
    });

    // List all subscriber keys (up to 1000 per list call — paginate if needed)
    let cursor;
    let sent = 0;
    let failed = 0;

    do {
      const list = await env.AURA_SUBS.list({ prefix: 'sub:', cursor, limit: 100 });
      cursor = list.cursor;

      await Promise.allSettled(
        list.keys.map(async ({ name }) => {
          const raw = await env.AURA_SUBS.get(name);
          if (!raw) return;
          const sub = JSON.parse(raw);
          const ok = await sendPush(env, sub, payload);
          if (ok) sent++;
          else {
            failed++;
            // Remove expired/invalid subscriptions automatically
            await env.AURA_SUBS.delete(name);
          }
        })
      );
    } while (cursor);

    console.log(`Daily push: sent=${sent} failed/removed=${failed}`);
  },
};

// ── WEB PUSH ────────────────────────────────────────────────────────────────
// Minimal VAPID + Web Push implementation using SubtleCrypto (Workers native)
// No npm dependency needed — Workers runtime supports crypto natively.

async function sendPush(env, subscription, payload) {
  const { endpoint, keys } = subscription;
  if (!endpoint || !keys) return false;

  try {
    const { p256dh, auth } = keys;

    // Build VAPID JWT
    const vapidJwt = await buildVapidJwt(env, endpoint);

    // Encrypt payload
    const encrypted = await encryptPayload(payload, p256dh, auth);

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `vapid t=${vapidJwt.token},k=${env.VAPID_PUBLIC_KEY}`,
        'Content-Type': 'application/octet-stream',
        'Content-Encoding': 'aes128gcm',
        TTL: '86400',
        Urgency: 'normal',
      },
      body: encrypted,
    });

    // 410 Gone / 404 = subscription expired
    return res.status < 400 || (res.status !== 404 && res.status !== 410);
  } catch {
    return false;
  }
}

async function buildVapidJwt(env, endpoint) {
  const origin = new URL(endpoint).origin;
  const exp = Math.floor(Date.now() / 1000) + 12 * 3600;

  const header = b64url(JSON.stringify({ typ: 'JWT', alg: 'ES256' }));
  const claims = b64url(JSON.stringify({ aud: origin, exp, sub: env.VAPID_EMAIL }));
  const unsigned = `${header}.${claims}`;

  // Import the private key (PKCS8 PEM or raw base64url)
  const privKeyBytes = base64urlToBytes(env.VAPID_PRIVATE_KEY);
  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    privKeyBytes,
    { name: 'ECDSA', namedCurve: 'P-256' },
    false,
    ['sign']
  );

  const sig = await crypto.subtle.sign(
    { name: 'ECDSA', hash: 'SHA-256' },
    cryptoKey,
    new TextEncoder().encode(unsigned)
  );

  const token = `${unsigned}.${bytesToB64url(new Uint8Array(sig))}`;
  return { token };
}

async function encryptPayload(payload, p256dhB64, authB64) {
  const recipientPublicKey = base64urlToBytes(p256dhB64);
  const authSecret = base64urlToBytes(authB64);

  const salt = crypto.getRandomValues(new Uint8Array(16));
  const serverKeyPair = await crypto.subtle.generateKey(
    { name: 'ECDH', namedCurve: 'P-256' },
    true,
    ['deriveKey', 'deriveBits']
  );

  const recipientKey = await crypto.subtle.importKey(
    'raw',
    recipientPublicKey,
    { name: 'ECDH', namedCurve: 'P-256' },
    false,
    []
  );

  const sharedBits = await crypto.subtle.deriveBits(
    { name: 'ECDH', public: recipientKey },
    serverKeyPair.privateKey,
    256
  );

  const serverPublicRaw = await crypto.subtle.exportKey('raw', serverKeyPair.publicKey);

  // HKDF to derive content encryption key + nonce (RFC 8291 / aes128gcm)
  const prk = await hkdf(
    authSecret,
    new Uint8Array(sharedBits),
    concat(utf8('WebPush: info\0'), recipientPublicKey, new Uint8Array(serverPublicRaw)),
    32
  );

  const cek = await hkdf(salt, prk, utf8('Content-Encoding: aes128gcm\0'), 16);
  const nonce = await hkdf(salt, prk, utf8('Content-Encoding: nonce\0'), 12);

  const aesKey = await crypto.subtle.importKey('raw', cek, 'AES-GCM', false, ['encrypt']);

  const plaintextBytes = new TextEncoder().encode(payload);
  const padded = new Uint8Array(plaintextBytes.length + 1);
  padded.set(plaintextBytes);
  padded[plaintextBytes.length] = 2; // delimiter

  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: nonce },
    aesKey,
    padded
  );

  // aes128gcm content coding header: salt(16) + rs(4) + keyid_len(1) + keyid
  const keyIdBytes = new Uint8Array(serverPublicRaw);
  const rs = new Uint8Array(4);
  new DataView(rs.buffer).setUint32(0, 4096, false);
  const header = concat(salt, rs, new Uint8Array([keyIdBytes.length]), keyIdBytes);
  return concat(header, new Uint8Array(ciphertext));
}

// ── Crypto helpers ──────────────────────────────────────────────────────────

async function hkdf(salt, ikm, info, length) {
  const key = await crypto.subtle.importKey('raw', ikm, 'HKDF', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'HKDF', hash: 'SHA-256', salt, info },
    key,
    length * 8
  );
  return new Uint8Array(bits);
}

function concat(...arrays) {
  const total = arrays.reduce((n, a) => n + a.length, 0);
  const out = new Uint8Array(total);
  let offset = 0;
  for (const a of arrays) { out.set(a, offset); offset += a.length; }
  return out;
}

function utf8(str) {
  return new TextEncoder().encode(str);
}

function b64url(str) {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

function bytesToB64url(bytes) {
  let binary = '';
  bytes.forEach(b => binary += String.fromCharCode(b));
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

function base64urlToBytes(str) {
  const padding = '='.repeat((4 - str.length % 4) % 4);
  const base64 = (str + padding).replace(/-/g, '+').replace(/_/g, '/');
  const binary = atob(base64);
  return Uint8Array.from(binary, c => c.charCodeAt(0));
}

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', utf8(str));
  return bytesToB64url(new Uint8Array(buf)).slice(0, 16);
}
