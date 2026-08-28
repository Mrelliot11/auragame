# AURA on Android (Trusted Web Activity)

AURA ships to Android as a **Trusted Web Activity (TWA)** — a thin native wrapper
(via [Bubblewrap](https://github.com/GoogleChromeLabs/bubblewrap)) around the
live site at `https://mrelliot11.github.io/auragame/`. There's no separate
native codebase to maintain: the wrapper always shows whatever is currently
deployed, and the game keeps working as a regular PWA in the browser too.

## What's already set up

- `manifest.json` — added `id` and `scope` fields (recommended for TWA identity).
- `android/twa-manifest.json` — Bubblewrap's project config: package id, icons,
  colors, and the deployed site's URL. Safe to commit — no secrets in it.
- `.well-known/assetlinks.json` — the Digital Asset Links file that proves this
  Android app and the website are the same origin (see **Known limitation** below
  before relying on it).
- `.github/workflows/android-twa.yml` — a manual CI workflow that builds a signed
  `.aab` (for Play Console) and `.apk` (for sideload testing). It runs in GitHub
  Actions because building an Android app needs the Android SDK + Gradle, which
  together are a large download this sandbox's network policy can't reach —
  GitHub's own runners have no such restriction.
- An **upload keystore** was generated for signing. It is intentionally **not**
  in this repo — see below for where it went.

## The signing keystore

A keystore (`aura-upload-key.jks`, alias `aura-upload`) was generated locally
and handed to you directly (not committed — private keys never belong in git).
Its SHA-256 certificate fingerprint is already in `.well-known/assetlinks.json`:

```
D4:7C:13:8E:44:07:76:24:ED:3D:DB:6C:AF:AE:A1:89:CB:A4:1C:89:06:FE:3A:7F:52:FA:C4:D7:DB:03:06:83
```

**Store the `.jks` file and its password somewhere safe (a password manager is
fine) — if you lose it, you lose the ability to update the app under the same
signing identity for anything not using Play App Signing.**

### Add it to GitHub so CI can sign builds

The workflow reads two repo secrets (**Settings → Secrets and variables →
Actions → New repository secret**):

| Secret | Value |
|---|---|
| `ANDROID_KEYSTORE_BASE64` | `base64 -w0 aura-upload-key.jks` (the whole output) |
| `ANDROID_KEYSTORE_PASSWORD` | the keystore password you were given |

Then run the workflow from the **Actions** tab → *Build Android (TWA)* →
**Run workflow**. It uploads `app-release-bundle.aab` and
`app-release-signed.apk` as build artifacts.

## Known limitation: `assetlinks.json` and shared GitHub Pages domains

Digital Asset Links verification is scoped to the **origin** (scheme + host +
port) — not the path. AURA is a *project* Pages site
(`mrelliot11.github.io/auragame/`), so its origin is `mrelliot11.github.io`,
shared with every other project page on that account. That means
`.well-known/assetlinks.json` **must be served from
`https://mrelliot11.github.io/.well-known/assetlinks.json`** — the account's
root Pages repo (`mrelliot11.github.io`), not from inside this `auragame` repo.
The copy in this repo is a reference/staging copy; it has no effect until it
(or its content) ends up at that root.

Two ways forward:

1. **Custom domain (recommended for a real launch).** Point a domain you own
   at this repo via GitHub Pages' custom domain setting (adds a `CNAME` file
   here). Once that domain serves the site at its root, `.well-known/
   assetlinks.json` in *this* repo starts being the one that matters — update
   `android/twa-manifest.json`'s `host` field to match, and rebuild.
2. **No custom domain.** Add the same `assetlinks.json` content to the
   `mrelliot11.github.io` repository's root (creating `.well-known/
   assetlinks.json` there), since that's what actually gets served at the
   shared origin's root.

Without one of these, the installed app will still *run* (TWA falls back to
opening in a normal Custom Tab with the browser's UI showing), it just won't
get the "fully trusted, no browser chrome" verified experience.

## Remaining steps (need your own Google account — can't be automated here)

1. **Google Play Console** — enroll as a developer (one-time $25 fee),
   create the app listing (package id `com.auragame.twa`, or change it in
   `android/twa-manifest.json` before your first upload — it's permanent
   afterward).
2. **Upload the `.aab`** from the workflow artifact to a testing track first.
3. **Enable Play App Signing** (default for new apps) — Play Console then
   shows you an **App signing certificate** SHA-256 fingerprint that's
   different from the upload key's. Add *that* fingerprint alongside the
   existing one in `assetlinks.json`'s `sha256_cert_fingerprints` array (both
   can coexist) — it's the one real installs from the Play Store are actually
   signed with.
4. Fill in store listing, content rating, privacy policy URL, screenshots,
   then submit for review.

## Rebuilding after changes

The wrapper has no logic of its own — after any change to `index.html`,
`game.js`, `style.css`, or `manifest.json`, once GitHub Pages redeploys, the
Android app picks it up automatically the next time it's opened (same as any
website). You only need to re-run the `android-twa.yml` workflow when
`android/twa-manifest.json` itself changes (icons, colors, package id,
version bump for a new Play Store release).
