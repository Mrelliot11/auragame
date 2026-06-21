# AURA Backend — Cloudflare Worker

Handles four optional features that run server-side:

| Feature | Endpoint |
|---|---|
| Puzzle database | `GET /api/puzzle/today` · `GET /api/puzzle/:idx` · `POST /api/puzzle` |
| Global stats | `POST /api/result` · `GET /api/stats/:idx` |
| Push notifications | `POST /api/push/subscribe` · `DELETE /api/push/subscribe` |
| Daily push cron | Cloudflare Cron Trigger at 07:00 UTC |

The game runs **fully offline** without this, falling back to `puzzles.js`. Set `API_URL` in `game.js` to connect.

---

## Prerequisites

- [Cloudflare account](https://dash.cloudflare.com) (free tier is enough)
- Node.js 18+
- Wrangler CLI (installed via `npm install` below)

---

## Setup (first time)

### 1. Install dependencies

```bash
cd backend
npm install
```

### 2. Authenticate Wrangler

```bash
npx wrangler login
```

### 3. Create KV namespaces

```bash
npx wrangler kv:namespace create AURA_PUZZLES
npx wrangler kv:namespace create AURA_PUZZLES --preview
npx wrangler kv:namespace create AURA_STATS
npx wrangler kv:namespace create AURA_STATS --preview
npx wrangler kv:namespace create AURA_SUBS
npx wrangler kv:namespace create AURA_SUBS --preview
```

Each command prints an `id`. Paste all six IDs into `wrangler.toml` where indicated.

### 4. Generate VAPID keys (for push notifications)

```bash
npm run generate-keys
```

This prints a public key and a private key. **Do not commit the private key.**

### 5. Set Worker secrets

```bash
npx wrangler secret put ADMIN_TOKEN         # any long random string — used to authenticate POST /api/puzzle
npx wrangler secret put VAPID_PUBLIC_KEY    # paste public key from step 4
npx wrangler secret put VAPID_PRIVATE_KEY   # paste private key from step 4
npx wrangler secret put VAPID_EMAIL         # e.g. mailto:you@example.com
```

### 6. Connect the game

In `game.js`, fill in the two connection points near the top of the file:

```js
const API_URL = 'https://aura-game.YOUR_SUBDOMAIN.workers.dev';
const PUSH_PUBLIC_KEY = 'BPxxxxx...'; // public key from step 4
```

### 7. Deploy

```bash
npm run deploy
```

Wrangler will print your Worker URL. That's your `API_URL`.

---

## Local development

```bash
npm run dev
```

The Worker runs at `http://localhost:8787`. Temporarily set `API_URL` in `game.js` to that URL for local testing.

---

## How it works

### Puzzle database

Puzzles are stored in `AURA_PUZZLES` KV as individual entries (`puzzle:0`, `puzzle:1`, …) with a `puzzles:count` key tracking the total. The game fetches today's puzzle from `GET /api/puzzle/today` (which computes `daysSinceEpoch % count` server-side). Results are cached in `sessionStorage` so replays don't re-fetch.

When `API_URL` is `null`, the game falls back to the local `puzzles.js` file — so everything still works offline.

To add a puzzle via the admin tool: open `/admin/`, fill in the form, click **Save to database ↑**, and enter your Worker URL + Admin Token when prompted. The token is the `ADMIN_TOKEN` secret you set in step 5 above.

### Global stats

Every time a player finishes a puzzle, `game.js` fires a fire-and-forget `POST /api/result` with the puzzle index, whether they won, and how many clues they used. The Worker increments a counter in `AURA_STATS` KV. When the result modal opens, `GET /api/stats/:idx` fetches the aggregate and displays player count + win rate.

### Push notifications

After a player's first win, the browser prompts for notification permission. If granted, the browser creates a Web Push subscription (endpoint + encryption keys) and `game.js` sends it to `POST /api/push/subscribe`. The Worker stores it in `AURA_SUBS` KV.

At 07:00 UTC each day, the Cloudflare Cron Trigger fires `scheduled()` in the Worker, which reads all subscriptions from KV and sends each one a push. Invalid/expired subscriptions (410 Gone) are deleted automatically.

### No npm dependencies

The Worker uses the native SubtleCrypto API (available in all Workers) for VAPID JWT signing and payload encryption (RFC 8291 / aes128gcm). No `web-push` package is needed.
