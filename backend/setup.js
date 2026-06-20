/**
 * Generate VAPID keys for Web Push.
 * Run: node setup.js
 *
 * Then set them as Cloudflare Worker secrets:
 *   wrangler secret put VAPID_PUBLIC_KEY
 *   wrangler secret put VAPID_PRIVATE_KEY
 *   wrangler secret put VAPID_EMAIL
 *
 * And paste PUSH_PUBLIC_KEY into game.js where indicated.
 */

const { webcrypto } = require('crypto');
const crypto = webcrypto;

async function main() {
  const keyPair = await crypto.subtle.generateKey(
    { name: 'ECDH', namedCurve: 'P-256' },
    true,
    ['deriveKey', 'deriveBits']
  );

  const publicRaw = await crypto.subtle.exportKey('raw', keyPair.publicKey);
  const privateRaw = await crypto.subtle.exportKey('pkcs8', keyPair.privateKey);

  const publicB64 = bytesToB64url(new Uint8Array(publicRaw));
  const privateB64 = bytesToB64url(new Uint8Array(privateRaw));

  console.log('\n──────────────────────────────────────────');
  console.log('VAPID Keys (generated fresh — keep private key secret)');
  console.log('──────────────────────────────────────────\n');
  console.log('VAPID_PUBLIC_KEY (also used as PUSH_PUBLIC_KEY in game.js):');
  console.log(publicB64);
  console.log('\nVAPID_PRIVATE_KEY (worker secret only — never commit):');
  console.log(privateB64);
  console.log('\nVAPID_EMAIL (worker secret — use your contact address):');
  console.log('mailto:you@example.com');
  console.log('\n──────────────────────────────────────────');
  console.log('Next steps:');
  console.log('1. wrangler secret put VAPID_PUBLIC_KEY   → paste public key');
  console.log('2. wrangler secret put VAPID_PRIVATE_KEY  → paste private key');
  console.log('3. wrangler secret put VAPID_EMAIL        → paste your mailto:');
  console.log('4. In game.js, set PUSH_PUBLIC_KEY to the public key above');
  console.log('──────────────────────────────────────────\n');
}

function bytesToB64url(bytes) {
  let binary = '';
  bytes.forEach(b => (binary += String.fromCharCode(b)));
  return Buffer.from(binary, 'binary')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

main().catch(console.error);
