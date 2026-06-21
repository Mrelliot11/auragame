/**
 * structure.test.js — structural integrity tests for index.html and admin/index.html
 * Run with: node tests/structure.test.js
 * No dependencies required (uses Node built-in assert + fs).
 *
 * These tests guard against accidental deletions of required IDs, broken paths,
 * missing meta tags, and layout invariants that the game relies on at runtime.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const adminHtml = fs.readFileSync(path.join(ROOT, 'admin', 'index.html'), 'utf8');

// ─── Helpers ─────────────────────────────────────────────────────────────────

function hasId(html, id) {
  return new RegExp(`id="${id}"`).test(html);
}

function hasAttr(html, attr, value) {
  return html.includes(`${attr}="${value}"`);
}

function idPosition(html, id) {
  return html.indexOf(`id="${id}"`);
}

// ─── Test runner ─────────────────────────────────────────────────────────────

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ✓  ${name}`);
    passed++;
  } catch (e) {
    console.log(`  ✗  ${name}`);
    console.log(`     ${e.message}`);
    failed++;
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// index.html
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Screens ─────────────────────────────────────────────────────────────────

console.log('\nindex.html — screens');

test('how-to screen exists (serves as landing page)', () => {
  assert.ok(hasId(indexHtml, 'how-to'), 'missing id="how-to"');
});

test('game screen exists', () => {
  assert.ok(hasId(indexHtml, 'game'), 'missing id="game"');
});

test('stats screen exists', () => {
  assert.ok(hasId(indexHtml, 'stats'), 'missing id="stats"');
});

test('archive screen exists', () => {
  assert.ok(hasId(indexHtml, 'archive'), 'missing id="archive"');
});

test('all screens have class="screen"', () => {
  // 4 screens: how-to (landing), game, stats, archive
  const count = (indexHtml.match(/class="screen[" ]/g) || []).length;
  assert.ok(count >= 4, `expected at least 4 .screen divs, found ${count}`);
});

// ─── Game UI elements ─────────────────────────────────────────────────────────

console.log('\nindex.html — game UI elements');

test('start button exists', () => {
  assert.ok(hasId(indexHtml, 'start-btn'));
});

test('guess field exists', () => {
  assert.ok(hasId(indexHtml, 'guess-field'));
});

test('reveal button exists', () => {
  assert.ok(hasId(indexHtml, 'reveal-btn'));
});

test('submit button exists', () => {
  assert.ok(hasId(indexHtml, 'submit-btn'));
});

test('dots row exists', () => {
  assert.ok(hasId(indexHtml, 'dots-row'));
});

test('clues list exists', () => {
  assert.ok(hasId(indexHtml, 'clues-list'));
});

test('wrong message element exists', () => {
  assert.ok(hasId(indexHtml, 'wrong-msg'));
});

test('clue count element exists', () => {
  assert.ok(hasId(indexHtml, 'clue-count'));
});

// ─── Modal elements ───────────────────────────────────────────────────────────

console.log('\nindex.html — result modal');

test('modal overlay exists', () => {
  assert.ok(hasId(indexHtml, 'modal'));
});

test('modal has role="dialog"', () => {
  assert.ok(indexHtml.includes('role="dialog"'));
});

test('modal close button exists', () => {
  assert.ok(hasId(indexHtml, 'm-close-btn'));
});

test('answer display exists', () => {
  assert.ok(hasId(indexHtml, 'm-answer'));
});

test('score display exists', () => {
  assert.ok(hasId(indexHtml, 'm-score'));
});

test('streak display exists', () => {
  assert.ok(hasId(indexHtml, 'm-streak'));
});

test('missed clues container exists', () => {
  assert.ok(hasId(indexHtml, 'm-missed'));
});

test('global stats container exists', () => {
  assert.ok(hasId(indexHtml, 'm-global'));
});

test('share dots element exists', () => {
  assert.ok(hasId(indexHtml, 's-dots'));
});

test('countdown element exists', () => {
  assert.ok(hasId(indexHtml, 'countdown'));
});

test('back button exists', () => {
  assert.ok(hasId(indexHtml, 'm-back-btn'));
});

// ─── Toast placement ──────────────────────────────────────────────────────────

console.log('\nindex.html — toast placement');

test('toast element exists', () => {
  assert.ok(hasId(indexHtml, 'toast'));
});

test('toast is NOT inside the game screen', () => {
  // game screen ends before toast — find positions
  const gameScreenStart = indexHtml.indexOf('id="game"');
  const toastPos = indexHtml.indexOf('id="toast"');
  // Toast must appear after the game screen's closing tag
  // Game screen is followed by stats, archive, then toast
  const statsPos = indexHtml.indexOf('id="stats"');
  assert.ok(toastPos > statsPos, 'toast should appear after the stats screen, outside all .screen divs');
});

test('toast has role="status" for accessibility', () => {
  const toastLine = indexHtml.match(/id="toast"[^>]*/);
  assert.ok(toastLine && toastLine[0].includes('role="status"'), 'toast should have role="status"');
});

// ─── Archive filters ──────────────────────────────────────────────────────────

console.log('\nindex.html — archive filters');

test('archive filter pills exist', () => {
  assert.ok(indexHtml.includes('class="filter-pill'));
});

test('"all" filter pill exists', () => {
  assert.ok(indexHtml.includes('data-filter="all"'));
});

test('"played" filter pill exists', () => {
  assert.ok(indexHtml.includes('data-filter="played"'));
});

test('"unplayed" filter pill exists', () => {
  assert.ok(indexHtml.includes('data-filter="unplayed"'));
});

test('archive list container exists', () => {
  assert.ok(hasId(indexHtml, 'archive-list'));
});

// ─── Script loading ───────────────────────────────────────────────────────────

console.log('\nindex.html — script loading & paths');

test('puzzles.js loaded with relative path', () => {
  assert.ok(indexHtml.includes('src="puzzles.js"'), 'puzzles.js should use relative path');
});

test('game.js loaded with relative path', () => {
  assert.ok(indexHtml.includes('src="game.js"'), 'game.js should use relative path');
});

test('service worker registered with relative path', () => {
  assert.ok(indexHtml.includes("register('sw.js')"), 'sw.js should use relative path');
});

test('manifest.json linked with relative path', () => {
  assert.ok(indexHtml.includes('href="manifest.json"'), 'manifest should use relative path');
});

// ─── Meta & OG tags ───────────────────────────────────────────────────────────

console.log('\nindex.html — meta & OG tags');

test('og:title meta tag present', () => {
  assert.ok(indexHtml.includes('property="og:title"'));
});

test('og:description meta tag present', () => {
  assert.ok(indexHtml.includes('property="og:description"'));
});

test('og:image meta tag present', () => {
  assert.ok(indexHtml.includes('property="og:image"'));
});

test('og:url meta tag present', () => {
  assert.ok(indexHtml.includes('property="og:url"'));
});

test('twitter:card meta tag present', () => {
  assert.ok(indexHtml.includes('name="twitter:card"'));
});

test('viewport meta tag present with user-scalable=no', () => {
  assert.ok(indexHtml.includes('user-scalable=no'));
});

test('charset UTF-8 declared', () => {
  assert.ok(indexHtml.toLowerCase().includes('charset="utf-8"'));
});

// ─── Accessibility ────────────────────────────────────────────────────────────

console.log('\nindex.html — accessibility');

test('sr-announce element exists for screen readers', () => {
  assert.ok(hasId(indexHtml, 'sr-announce'));
});

test('guess field has aria-label', () => {
  const guessLine = indexHtml.match(/id="guess-field"[^>]*/);
  assert.ok(guessLine && guessLine[0].includes('aria-label'));
});

test('sound button has aria-pressed', () => {
  assert.ok(indexHtml.includes('aria-pressed='));
});

test('replay banner has aria-live', () => {
  const banner = indexHtml.match(/id="replay-banner"[^>]*/);
  assert.ok(banner && banner[0].includes('aria-live'));
});

// ─── Files on disk ────────────────────────────────────────────────────────────

console.log('\nindex.html — required files on disk');

test('.nojekyll file exists', () => {
  assert.ok(fs.existsSync(path.join(ROOT, '.nojekyll')), '.nojekyll must exist to prevent Jekyll suppressing admin/');
});

test('sw.js exists', () => {
  assert.ok(fs.existsSync(path.join(ROOT, 'sw.js')));
});

test('manifest.json exists', () => {
  assert.ok(fs.existsSync(path.join(ROOT, 'manifest.json')));
});

test('puzzles.js exists', () => {
  assert.ok(fs.existsSync(path.join(ROOT, 'puzzles.js')));
});

test('game.js exists', () => {
  assert.ok(fs.existsSync(path.join(ROOT, 'game.js')));
});

// ═══════════════════════════════════════════════════════════════════════════════
// admin/index.html
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Gate & auth ─────────────────────────────────────────────────────────────

console.log('\nadmin/index.html — gate & auth');

test('password gate element exists', () => {
  assert.ok(hasId(adminHtml, 'gate'));
});

test('app element starts hidden', () => {
  // The app div must have display:none initially
  const appMatch = adminHtml.match(/id="app"[^>]*/);
  assert.ok(appMatch, 'id="app" must exist');
  // It gets shown via JS; in HTML it should be display:none
  const appSection = adminHtml.slice(adminHtml.indexOf('id="app"') - 20, adminHtml.indexOf('id="app"') + 50);
  assert.ok(adminHtml.includes('#app { display: none') || adminHtml.includes('#app{display:none'), '#app should start hidden in CSS');
});

test('ADMIN_PASSWORD constant is defined', () => {
  assert.ok(adminHtml.includes('const ADMIN_PASSWORD ='));
});

test('password input exists with type="password"', () => {
  assert.ok(adminHtml.includes('type="password"'));
});

test('gate form has onsubmit handler', () => {
  assert.ok(adminHtml.includes('onsubmit="checkPassword(event)"'));
});

test('gate error element exists', () => {
  assert.ok(hasId(adminHtml, 'gate-error'));
});

// ─── Script path ─────────────────────────────────────────────────────────────

console.log('\nadmin/index.html — script paths');

test('puzzles.js loaded from parent directory (../puzzles.js)', () => {
  assert.ok(adminHtml.includes('src="../puzzles.js"'), 'must use ../puzzles.js — admin lives one level down');
});

test('no absolute paths to puzzles.js', () => {
  assert.ok(!adminHtml.includes('src="/puzzles.js"'), 'absolute /puzzles.js breaks on GitHub Pages');
});

// ─── Tabs & panels ───────────────────────────────────────────────────────────

console.log('\nadmin/index.html — tabs & panels');

test('New Puzzle tab panel exists', () => {
  assert.ok(hasId(adminHtml, 'panel-create'));
});

test('All Puzzles tab panel exists', () => {
  assert.ok(hasId(adminHtml, 'panel-list'));
});

test('create panel is active by default', () => {
  // class comes before id in the markup, so search the full tag
  const tagMatch = adminHtml.match(/<div[^>]*id="panel-create"[^>]*>|<div[^>]*class="[^"]*active[^"]*"[^>]*id="panel-create"[^>]*>/);
  const tag = tagMatch ? tagMatch[0] : adminHtml.slice(adminHtml.indexOf('id="panel-create"') - 60, adminHtml.indexOf('id="panel-create"') + 20);
  assert.ok(tag.includes('active'), 'panel-create should have "active" class in its opening tag');
});

// ─── Create form ─────────────────────────────────────────────────────────────

console.log('\nadmin/index.html — create form fields');

test('answer input exists', () => {
  assert.ok(hasId(adminHtml, 'f-answer'));
});

test('category select exists', () => {
  assert.ok(hasId(adminHtml, 'f-category'));
});

test('aura color text input exists', () => {
  assert.ok(hasId(adminHtml, 'f-aura'));
});

test('color picker input exists', () => {
  assert.ok(hasId(adminHtml, 'color-picker'));
});

test('color swatch exists', () => {
  assert.ok(hasId(adminHtml, 'color-swatch'));
});

test('clues list container exists', () => {
  assert.ok(hasId(adminHtml, 'clues-list'));
});

test('duplicate warning element exists', () => {
  assert.ok(hasId(adminHtml, 'dup-warning'));
});

// ─── Export section ───────────────────────────────────────────────────────────

console.log('\nadmin/index.html — export section');

test('export code block exists', () => {
  assert.ok(hasId(adminHtml, 'export-code'));
});

test('schedule line exists', () => {
  assert.ok(hasId(adminHtml, 'schedule-line'));
});

test('copy export button calls copyExport()', () => {
  assert.ok(adminHtml.includes('onclick="copyExport()"'));
});

// ─── List panel ──────────────────────────────────────────────────────────────

console.log('\nadmin/index.html — list panel');

test('puzzle table body exists', () => {
  assert.ok(hasId(adminHtml, 'puzzle-tbody'));
});

test('category filter container exists', () => {
  assert.ok(hasId(adminHtml, 'cat-filter'));
});

test('list count element exists', () => {
  assert.ok(hasId(adminHtml, 'list-count'));
});

test('list label element exists', () => {
  assert.ok(hasId(adminHtml, 'list-label'));
});

test('search input exists', () => {
  assert.ok(adminHtml.includes('class="search-input"'));
});

test('no-results element exists', () => {
  assert.ok(hasId(adminHtml, 'no-results'));
});

test('header puzzle count element exists', () => {
  assert.ok(hasId(adminHtml, 'hdr-count'));
});

// ─── EPOCH constant ───────────────────────────────────────────────────────────

console.log('\nadmin/index.html — constants');

test('EPOCH constant matches game.js epoch date', () => {
  assert.ok(adminHtml.includes("'2025-01-01T00:00:00Z'"), 'EPOCH should be 2025-01-01T00:00:00Z');
});

// ─── Summary ─────────────────────────────────────────────────────────────────

console.log(`\n${passed + failed} tests: ${passed} passed, ${failed} failed\n`);
if (failed > 0) process.exit(1);
