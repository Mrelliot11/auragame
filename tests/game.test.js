/**
 * game.test.js — pure-logic unit tests for game.js
 * Run with: node tests/game.test.js
 * No dependencies required (uses Node built-in assert).
 */

const assert = require('assert');

// ─── Inline the pure functions from game.js ───────────────────────────────────
// (DOM-dependent code never runs here)

const ABBREVIATIONS = {
  nyc: 'new york city',
  ny: 'new york city',
  la: 'los angeles',
  uk: 'united kingdom',
  usa: 'united states of america',
  us: 'united states',
  mj: 'michael jordan',
};

function normalizeGuess(s) {
  return s.normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/^(the |a |an )/, '')
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = [i];
    for (let j = 1; j <= n; j++) dp[i][j] = 0;
  }
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

function checkGuess(raw, answerRaw) {
  const guess = normalizeGuess(raw);
  const answer = normalizeGuess(answerRaw);
  if (guess === answer) return true;
  const expanded = ABBREVIATIONS[guess];
  if (expanded && normalizeGuess(expanded) === answer) return true;
  const threshold = answer.length <= 4 ? 0 : answer.length <= 7 ? 1 : 2;
  return levenshtein(guess, answer) <= threshold;
}

const EPOCH = new Date('2025-01-01T00:00:00Z');
const PUZZLES_LENGTH = 365;

function getDayIndex(now = Date.now()) {
  return Math.floor((now - EPOCH) / 86400000) % PUZZLES_LENGTH;
}

function getDaysElapsed(now = Date.now()) {
  return Math.floor((now - EPOCH) / 86400000);
}

function getPuzzleIndexForDaysAgo(daysAgo, now = Date.now()) {
  const raw = Math.floor((now - daysAgo * 86400000 - EPOCH) / 86400000);
  return ((raw % PUZZLES_LENGTH) + PUZZLES_LENGTH) % PUZZLES_LENGTH;
}

function getUTCDateKey(daysAgo = 0, now = Date.now()) {
  const d = new Date(now - daysAgo * 86400000);
  const y = d.getUTCFullYear();
  const mo = String(d.getUTCMonth() + 1).padStart(2, '0');
  const da = String(d.getUTCDate()).padStart(2, '0');
  return `aura_result_${y}-${mo}-${da}`;
}

// Stub localStorage for stats tests
function makeLocalStorage() {
  const store = {};
  return {
    getItem: k => store[k] ?? null,
    setItem: (k, v) => { store[k] = v; },
    removeItem: k => { delete store[k]; },
    clear: () => { Object.keys(store).forEach(k => delete store[k]); },
    _store: store,
  };
}

function makeGetStats(ls) {
  return function getStats() {
    const raw = ls.getItem('aura_stats');
    const stats = raw ? JSON.parse(raw) : {};
    return {
      currentStreak: stats.currentStreak || 0,
      maxStreak: stats.maxStreak || 0,
      totalPlayed: stats.totalPlayed || 0,
      totalWon: stats.totalWon || 0,
      distribution: (Array.isArray(stats.distribution) && stats.distribution.length === 5)
        ? stats.distribution : [0, 0, 0, 0, 0],
    };
  };
}

function makeUpdateStats(ls, nowFn) {
  const getStats = makeGetStats(ls);
  return function updateStats(won, cluesUsed) {
    const stats = getStats();
    stats.totalPlayed++;
    if (won) {
      stats.totalWon++;
      stats.distribution[cluesUsed - 1]++;
      const yesterdayRaw = ls.getItem(getUTCDateKey(1, nowFn()));
      if (yesterdayRaw && JSON.parse(yesterdayRaw).won) {
        stats.currentStreak++;
      } else {
        stats.currentStreak = 1;
      }
      stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);
    } else {
      stats.currentStreak = 0;
    }
    ls.setItem('aura_stats', JSON.stringify(stats));
  };
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

// ─── normalizeGuess ───────────────────────────────────────────────────────────

console.log('\nnormalizeGuess');

test('lowercases', () => {
  assert.strictEqual(normalizeGuess('BEYONCÉ'), 'beyonce');
});

test('strips diacritics', () => {
  assert.strictEqual(normalizeGuess('Beyoncé'), 'beyonce');
  assert.strictEqual(normalizeGuess('Björk'), 'bjork');
  assert.strictEqual(normalizeGuess('Frédéric Chopin'), 'fredericchopin');
});

test('strips leading article "the"', () => {
  assert.strictEqual(normalizeGuess('The Beatles'), 'beatles');
});

test('strips leading article "a"', () => {
  assert.strictEqual(normalizeGuess('a clockwork orange'), 'clockworkorange');
});

test('strips leading article "an"', () => {
  assert.strictEqual(normalizeGuess('An Inspector Calls'), 'inspectorcalls');
});

test('strips non-alphanumeric', () => {
  assert.strictEqual(normalizeGuess('New York!'), 'newyork');
  assert.strictEqual(normalizeGuess("McDonald's"), 'mcdonalds');
});

test('does not strip article in the middle', () => {
  assert.strictEqual(normalizeGuess('Beauty and the Beast'), 'beautyandthebeast');
});

// ─── levenshtein ─────────────────────────────────────────────────────────────

console.log('\nlevenshtein');

test('identical strings → 0', () => {
  assert.strictEqual(levenshtein('paris', 'paris'), 0);
});

test('empty string → length of other', () => {
  assert.strictEqual(levenshtein('', 'abc'), 3);
  assert.strictEqual(levenshtein('abc', ''), 3);
});

test('single substitution', () => {
  assert.strictEqual(levenshtein('cat', 'bat'), 1);
  assert.strictEqual(levenshtein('kitten', 'mitten'), 1);
});

test('single insertion', () => {
  assert.strictEqual(levenshtein('color', 'colour'), 1);
});

test('single deletion', () => {
  assert.strictEqual(levenshtein('beyonce', 'beyonc'), 1);
});

test('multi-edit distance', () => {
  assert.strictEqual(levenshtein('kitten', 'sitting'), 3);
});

// ─── checkGuess ──────────────────────────────────────────────────────────────

console.log('\ncheckGuess');

test('exact match', () => {
  assert.ok(checkGuess('Beyoncé', 'Beyoncé'));
});

test('case-insensitive', () => {
  assert.ok(checkGuess('beyonce', 'Beyoncé'));
  assert.ok(checkGuess('BEYONCE', 'Beyoncé'));
});

test('diacritic-insensitive', () => {
  assert.ok(checkGuess('Beyonce', 'Beyoncé'));
});

test('strips articles from guess', () => {
  assert.ok(checkGuess('The Beatles', 'Beatles'));
});

test('strips articles from answer', () => {
  assert.ok(checkGuess('Beatles', 'The Beatles'));
});

test('abbreviation: NYC → New York City', () => {
  assert.ok(checkGuess('NYC', 'New York City'));
});

test('abbreviation: NY → New York City', () => {
  assert.ok(checkGuess('NY', 'New York City'));
});

test('abbreviation: LA → Los Angeles', () => {
  assert.ok(checkGuess('LA', 'Los Angeles'));
});

test('abbreviation: UK → United Kingdom', () => {
  assert.ok(checkGuess('UK', 'United Kingdom'));
});

test('abbreviation: MJ → Michael Jordan', () => {
  assert.ok(checkGuess('MJ', 'Michael Jordan'));
});

test('typo tolerance — short answer (≤4 chars) requires exact match', () => {
  assert.ok(!checkGuess('Rome', 'Rio'));   // distance 2, threshold 0
  assert.ok(checkGuess('rio', 'Rio'));
});

test('typo tolerance — medium answer (≤7 chars) allows 1 edit', () => {
  assert.ok(checkGuess('colour', 'color'));   // distance 1 ✓
  assert.ok(!checkGuess('prrss', 'paris'));   // distance 3 — too far for 5-char answer
});

test('typo tolerance — long answer (>7 chars) allows 2 edits', () => {
  assert.ok(checkGuess('Beethovn', 'Beethoven'));    // distance 1 ✓
  assert.ok(checkGuess('Beathoven', 'Beethoven'));   // distance 2 ✓
  assert.ok(!checkGuess('Beathofeen', 'Beethoven')); // distance 3 — too far
});

test('wrong guess rejected', () => {
  assert.ok(!checkGuess('Mozart', 'Beethoven'));
});

test('empty guess rejected', () => {
  assert.ok(!checkGuess('', 'Beyoncé'));
});

// ─── getUTCDateKey ────────────────────────────────────────────────────────────

console.log('\ngetUTCDateKey');

test('returns correct key for a known UTC date', () => {
  const jan1 = Date.UTC(2025, 0, 1); // 2025-01-01
  assert.strictEqual(getUTCDateKey(0, jan1), 'aura_result_2025-01-01');
});

test('daysAgo=1 returns yesterday', () => {
  const jan2 = Date.UTC(2025, 0, 2);
  assert.strictEqual(getUTCDateKey(1, jan2), 'aura_result_2025-01-01');
});

test('pads month and day with zeros', () => {
  const mar5 = Date.UTC(2025, 2, 5);
  assert.strictEqual(getUTCDateKey(0, mar5), 'aura_result_2025-03-05');
});

// ─── getDayIndex / getDaysElapsed ─────────────────────────────────────────────

console.log('\ngetDayIndex / getDaysElapsed');

test('day 0 on epoch date', () => {
  const epoch = Date.UTC(2025, 0, 1);
  assert.strictEqual(getDayIndex(epoch), 0);
  assert.strictEqual(getDaysElapsed(epoch), 0);
});

test('day 1 on 2025-01-02', () => {
  const jan2 = Date.UTC(2025, 0, 2);
  assert.strictEqual(getDayIndex(jan2), 1);
  assert.strictEqual(getDaysElapsed(jan2), 1);
});

test('getDayIndex wraps at PUZZLES.length', () => {
  const day365 = EPOCH.getTime() + 365 * 86400000;
  assert.strictEqual(getDayIndex(day365), 0); // 365 % 365 = 0
});

test('getDayIndex does not wrap getDaysElapsed', () => {
  const day365 = EPOCH.getTime() + 365 * 86400000;
  assert.strictEqual(getDaysElapsed(day365), 365);
});

// ─── getPuzzleIndexForDaysAgo ─────────────────────────────────────────────────

console.log('\ngetPuzzleIndexForDaysAgo');

test('daysAgo=0 matches getDayIndex', () => {
  const now = Date.UTC(2025, 5, 1);
  assert.strictEqual(getPuzzleIndexForDaysAgo(0, now), getDayIndex(now));
});

test('daysAgo=1 is one behind today', () => {
  const now = Date.UTC(2025, 5, 10); // day 160
  assert.strictEqual(getPuzzleIndexForDaysAgo(1, now), getDayIndex(now) - 1);
});

test('never returns negative index', () => {
  const epoch = EPOCH.getTime();
  for (let d = 0; d < 400; d++) {
    const now = epoch + d * 86400000;
    for (let ago = 0; ago <= d; ago++) {
      const idx = getPuzzleIndexForDaysAgo(ago, now);
      assert.ok(idx >= 0 && idx < PUZZLES_LENGTH, `idx ${idx} out of range for daysAgo=${ago} on day=${d}`);
    }
  }
});

// ─── getStats / updateStats ───────────────────────────────────────────────────

console.log('\ngetStats / updateStats');

test('returns zero state when localStorage is empty', () => {
  const ls = makeLocalStorage();
  const getStats = makeGetStats(ls);
  const stats = getStats();
  assert.deepStrictEqual(stats, {
    currentStreak: 0, maxStreak: 0, totalPlayed: 0, totalWon: 0,
    distribution: [0, 0, 0, 0, 0],
  });
});

test('returns zero state when stored distribution has wrong length', () => {
  const ls = makeLocalStorage();
  ls.setItem('aura_stats', JSON.stringify({ currentStreak: 2, distribution: [1, 2] }));
  const getStats = makeGetStats(ls);
  const stats = getStats();
  assert.deepStrictEqual(stats.distribution, [0, 0, 0, 0, 0]);
  assert.strictEqual(stats.currentStreak, 2); // other fields preserved
});

test('win increments totalPlayed and totalWon', () => {
  const ls = makeLocalStorage();
  const now = Date.UTC(2025, 2, 10);
  const updateStats = makeUpdateStats(ls, () => now);
  updateStats(true, 3);
  const getStats = makeGetStats(ls);
  const s = getStats();
  assert.strictEqual(s.totalPlayed, 1);
  assert.strictEqual(s.totalWon, 1);
});

test('win increments correct distribution bucket', () => {
  const ls = makeLocalStorage();
  const now = Date.UTC(2025, 2, 10);
  const updateStats = makeUpdateStats(ls, () => now);
  updateStats(true, 2);
  const s = makeGetStats(ls)();
  assert.deepStrictEqual(s.distribution, [0, 1, 0, 0, 0]);
});

test('first win starts streak at 1', () => {
  const ls = makeLocalStorage();
  const now = Date.UTC(2025, 2, 10);
  const updateStats = makeUpdateStats(ls, () => now);
  updateStats(true, 1);
  assert.strictEqual(makeGetStats(ls)().currentStreak, 1);
});

test('consecutive day win extends streak', () => {
  const ls = makeLocalStorage();
  const day1 = Date.UTC(2025, 2, 10);
  const day2 = Date.UTC(2025, 2, 11);

  // Record yesterday's win manually
  ls.setItem(getUTCDateKey(0, day1), JSON.stringify({ won: true, cluesUsed: 1, ts: day1 }));
  ls.setItem('aura_stats', JSON.stringify({ currentStreak: 1, maxStreak: 1, totalPlayed: 1, totalWon: 1, distribution: [1,0,0,0,0] }));

  const updateStats = makeUpdateStats(ls, () => day2);
  updateStats(true, 1);
  assert.strictEqual(makeGetStats(ls)().currentStreak, 2);
});

test('maxStreak updates when streak exceeds previous best', () => {
  const ls = makeLocalStorage();
  const day1 = Date.UTC(2025, 2, 10);
  const day2 = Date.UTC(2025, 2, 11);

  ls.setItem(getUTCDateKey(0, day1), JSON.stringify({ won: true, cluesUsed: 1, ts: day1 }));
  ls.setItem('aura_stats', JSON.stringify({ currentStreak: 1, maxStreak: 1, totalPlayed: 1, totalWon: 1, distribution: [1,0,0,0,0] }));

  const updateStats = makeUpdateStats(ls, () => day2);
  updateStats(true, 1);
  assert.strictEqual(makeGetStats(ls)().maxStreak, 2);
});

test('loss resets streak to 0', () => {
  const ls = makeLocalStorage();
  ls.setItem('aura_stats', JSON.stringify({ currentStreak: 5, maxStreak: 5, totalPlayed: 5, totalWon: 5, distribution: [1,1,1,1,1] }));
  const now = Date.UTC(2025, 2, 10);
  const updateStats = makeUpdateStats(ls, () => now);
  updateStats(false, 3);
  assert.strictEqual(makeGetStats(ls)().currentStreak, 0);
});

test('loss does not increment totalWon', () => {
  const ls = makeLocalStorage();
  const now = Date.UTC(2025, 2, 10);
  const updateStats = makeUpdateStats(ls, () => now);
  updateStats(false, 5);
  const s = makeGetStats(ls)();
  assert.strictEqual(s.totalPlayed, 1);
  assert.strictEqual(s.totalWon, 0);
});

test('missed day resets streak to 1 on next win', () => {
  const ls = makeLocalStorage();
  // yesterday has NO result (missed)
  ls.setItem('aura_stats', JSON.stringify({ currentStreak: 3, maxStreak: 3, totalPlayed: 3, totalWon: 3, distribution: [1,1,1,0,0] }));
  const today = Date.UTC(2025, 2, 12);
  const updateStats = makeUpdateStats(ls, () => today);
  updateStats(true, 1);
  assert.strictEqual(makeGetStats(ls)().currentStreak, 1);
});

// ─── Summary ─────────────────────────────────────────────────────────────────

console.log(`\n${passed + failed} tests: ${passed} passed, ${failed} failed\n`);
if (failed > 0) process.exit(1);
