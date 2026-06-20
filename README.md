# AURA

A daily vibe puzzle. Guess the person, place, or thing from feeling alone. No names. No facts. Just aura.

One puzzle per day, same for everyone. Up to 5 clues, 3 wrong guesses allowed.

---

## How to play

1. Read the first clue — a feeling, a texture, a color, a mood
2. Type your guess, or reveal the next clue if you're stuck
3. Fewer clues used = better score
4. Share your dot trail without spoiling the answer

---

## Tech stack

| Layer | Choice |
|---|---|
| Frontend | Vanilla HTML/CSS/JS — no framework, no build step |
| Fonts | Google Fonts (Cormorant Garamond + DM Sans) |
| Offline | PWA with cache-first service worker |
| Icons | Hand-generated PNG + SVG (no image tools required) |
| Share | HTML5 Canvas (1080×1080) + Web Share API |
| Audio | Web Audio API (oscillator synthesis) |
| Backend | Cloudflare Workers + KV (optional) |
| Push | Web Push API + Cloudflare Cron Trigger (optional) |

Everything except push notifications works with zero backend — the game is a static site.

---

## File structure

```
auragame/
├── index.html          # markup + all CSS
├── game.js             # all game logic
├── puzzles.js          # 365 daily puzzles (PUZZLES array)
├── sw.js               # service worker (cache + push handlers)
├── manifest.json       # PWA manifest
├── favicon.svg         # browser tab icon
├── apple-touch-icon.png
├── icon-192.png
├── icon-512.png
├── og.svg              # 1200×630 social share image
├── PUZZLE_GUIDE.md     # style guide for writing new puzzles
├── admin/
│   └── index.html      # password-protected puzzle authoring tool
└── backend/
    ├── worker.js       # Cloudflare Worker (API + push)
    ├── wrangler.toml   # Worker config (fill in KV IDs)
    ├── package.json
    ├── setup.js        # VAPID key generator
    └── README.md       # backend deployment guide
```

---

## Local development

No build step needed. Open directly in a browser:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Then open `http://localhost:8080`.

The service worker only registers on `localhost` and HTTPS. On plain `file://` it is skipped gracefully.

---

## Adding puzzles

See [PUZZLE_GUIDE.md](PUZZLE_GUIDE.md) for the full style guide.

Quick format:

```js
{
  answer: "Beyoncé",
  category: "Person",   // Person · Place · Thing · Film · Brand · Food/Drink · etc.
  aura: "#C9A227",      // hex color that feels like the answer
  clues: [
    "Golden and sovereign...",   // hardest (most abstract)
    "...",
    "...",
    "...",
    "...",                       // easiest (closest to a fact)
  ]
}
```

The admin tool at `/admin/` (password: `aura2025`) lets you author puzzles with a live preview and validates clue quality before exporting the code.

---

## Daily puzzle rotation

Puzzles rotate by UTC day offset from the epoch `2025-01-01T00:00:00Z`:

```js
const idx = Math.floor((Date.now() - epoch) / 86400000) % PUZZLES.length;
```

Same index for every player worldwide, resets at midnight UTC.

---

## Backend (optional)

The backend adds:
- **Global stats** — player count and win rate shown in the result modal
- **Daily push notifications** — opt-in reminder each day at 07:00 UTC

See [backend/README.md](backend/README.md) for full setup. To connect the game, fill in two constants at the top of `game.js`:

```js
// 🔌 CONNECTION POINT — set these after deploying the Cloudflare Worker
const API_URL = null;        // your Worker URL
const PUSH_PUBLIC_KEY = null; // your VAPID public key
```

---

## Configuration

| Constant | File | Default | Description |
|---|---|---|---|
| `API_URL` | `game.js` | `null` | Cloudflare Worker URL; `null` = offline mode |
| `PUSH_PUBLIC_KEY` | `game.js` | `null` | VAPID public key for Web Push |
| `ADMIN_PASSWORD` | `admin/index.html` | `aura2025` | Admin tool password |
| Epoch | `game.js` | `2025-01-01T00:00:00Z` | Day 1 of the puzzle calendar |
| `MAX_WRONG` | `game.js` | `3` | Wrong guesses before game over |
| Cron | `backend/wrangler.toml` | `0 7 * * *` | Push notification time (UTC) |

---

## Deployment

The frontend is a static site — deploy anywhere:

- **Cloudflare Pages** (recommended — same infra as the Worker)
- Vercel, Netlify, GitHub Pages, etc.

Set the domain in `index.html` OG tags and `manifest.json` after deployment.
