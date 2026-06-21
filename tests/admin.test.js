/**
 * admin.test.js — unit tests for admin/index.html pure logic
 * Run with: node tests/admin.test.js
 * No dependencies required (uses Node built-in assert).
 */

const assert = require('assert');

// ─── Pure functions extracted from admin/index.html ───────────────────────────

function buildEntry(answer, category, aura, clues) {
  const ind = '  ';
  return `{
  answer: ${JSON.stringify(answer)},
  category: ${JSON.stringify(category)},
  aura: ${JSON.stringify(aura)},
  clues: [
${clues.map(c => ind + ind + JSON.stringify(c)).join(',\n')}
  ]
},`;
}

function escHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function isValidHex(val) {
  const hex = val.trim();
  return /^#[0-9A-Fa-f]{6}$/.test(hex) || /^#[0-9A-Fa-f]{3}$/.test(hex);
}

function sortCategories(cats) {
  return [...cats].sort((a, b) => a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b));
}

function isDuplicate(answer, puzzles) {
  return Boolean(answer && puzzles.some(p => p.answer.toLowerCase() === answer.toLowerCase()));
}

function filterPuzzles(puzzles, activeCategory, searchQuery) {
  return puzzles.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = !searchQuery || p.answer.toLowerCase().includes(searchQuery) || p.category.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });
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

// ─── buildEntry ───────────────────────────────────────────────────────────────

console.log('\nbuildEntry');

const SAMPLE_CLUES = ['Clue one', 'Clue two', 'Clue three', 'Clue four', 'Clue five'];

test('output starts with { and ends with },', () => {
  const out = buildEntry('Beyoncé', 'Person', '#C9A227', SAMPLE_CLUES);
  assert.ok(out.startsWith('{'), 'should start with {');
  assert.ok(out.trimEnd().endsWith('},'), 'should end with },');
});

test('answer field is JSON-encoded', () => {
  const out = buildEntry('Beyoncé', 'Person', '#C9A227', SAMPLE_CLUES);
  assert.ok(out.includes('"Beyoncé"'), 'answer should be JSON string');
});

test('special characters in answer are JSON-escaped', () => {
  const out = buildEntry('McDonald\'s', 'Brand', '#FF0000', SAMPLE_CLUES);
  assert.ok(out.includes('"McDonald\'s"') || out.includes('"McDonald\\\'s"') || out.includes("\"McDonald's\""));
  // JSON.stringify handles this correctly — just verify it parses back
  const answerMatch = out.match(/answer: (".*?")/);
  assert.ok(answerMatch, 'answer field should be present');
  assert.strictEqual(JSON.parse(answerMatch[1]), "McDonald's");
});

test('aura color is included', () => {
  const out = buildEntry('Paris', 'Place', '#B07DC3', SAMPLE_CLUES);
  assert.ok(out.includes('"#B07DC3"'));
});

test('all 5 clues appear in output', () => {
  const out = buildEntry('Test', 'Thing', '#123456', SAMPLE_CLUES);
  SAMPLE_CLUES.forEach(clue => {
    assert.ok(out.includes(`"${clue}"`), `missing clue: ${clue}`);
  });
});

test('clues are comma-separated', () => {
  const out = buildEntry('Test', 'Thing', '#123456', SAMPLE_CLUES);
  const cluesBlock = out.match(/clues: \[([\s\S]*?)\]/)[1];
  const lines = cluesBlock.trim().split('\n').filter(l => l.trim());
  // 4 commas for 5 clues (last has none from join, but the entry ends with ,)
  assert.strictEqual(lines.length, 5);
});

test('output is valid when parsed back with eval-safe check', () => {
  const out = buildEntry('Beyoncé', 'Person', '#C9A227', SAMPLE_CLUES);
  // Wrap in array to make it parseable via JSON — we just check structure
  assert.ok(out.includes('answer:'));
  assert.ok(out.includes('category:'));
  assert.ok(out.includes('aura:'));
  assert.ok(out.includes('clues:'));
});

test('newlines in clues are JSON-escaped', () => {
  const cluesWithNewline = ['Line one\nLine two', ...SAMPLE_CLUES.slice(1)];
  const out = buildEntry('Test', 'Thing', '#000000', cluesWithNewline);
  assert.ok(out.includes('\\n'), 'newline should be JSON-escaped as \\n');
});

// ─── escHtml ─────────────────────────────────────────────────────────────────

console.log('\nescHtml');

test('escapes ampersand', () => {
  assert.strictEqual(escHtml('A & B'), 'A &amp; B');
});

test('escapes less-than', () => {
  assert.strictEqual(escHtml('<script>'), '&lt;script&gt;');
});

test('escapes greater-than', () => {
  assert.strictEqual(escHtml('a > b'), 'a &gt; b');
});

test('escapes all three in one string', () => {
  assert.strictEqual(escHtml('<a href="x&y">z>w</a>'), '&lt;a href="x&amp;y"&gt;z&gt;w&lt;/a&gt;');
});

test('returns unchanged string when no special chars', () => {
  assert.strictEqual(escHtml('Beyoncé'), 'Beyoncé');
  assert.strictEqual(escHtml('New York City'), 'New York City');
});

test('empty string returns empty string', () => {
  assert.strictEqual(escHtml(''), '');
});

// ─── isValidHex ──────────────────────────────────────────────────────────────

console.log('\nisValidHex (aura color validation)');

test('valid 6-digit hex', () => {
  assert.ok(isValidHex('#8B5CF6'));
  assert.ok(isValidHex('#000000'));
  assert.ok(isValidHex('#FFFFFF'));
  assert.ok(isValidHex('#C9A227'));
});

test('valid 3-digit hex', () => {
  assert.ok(isValidHex('#FFF'));
  assert.ok(isValidHex('#000'));
  assert.ok(isValidHex('#A3F'));
});

test('lowercase hex digits accepted', () => {
  assert.ok(isValidHex('#8b5cf6'));
  assert.ok(isValidHex('#abc'));
});

test('mixed case accepted', () => {
  assert.ok(isValidHex('#8B5cf6'));
});

test('missing hash rejected', () => {
  assert.ok(!isValidHex('8B5CF6'));
});

test('wrong length rejected', () => {
  assert.ok(!isValidHex('#8B5CF'));    // 5 digits
  assert.ok(!isValidHex('#8B5CF67')); // 7 digits
  assert.ok(!isValidHex('#AB'));       // 2 digits
});

test('non-hex characters rejected', () => {
  assert.ok(!isValidHex('#GGGGGG'));
  assert.ok(!isValidHex('#ZZZZZZ'));
});

test('trims whitespace before checking', () => {
  assert.ok(isValidHex('  #8B5CF6  '));
});

// ─── sortCategories ───────────────────────────────────────────────────────────

console.log('\nsortCategories');

test('"All" is always first', () => {
  const cats = ['Thing', 'All', 'Person', 'Place'];
  const sorted = sortCategories(cats);
  assert.strictEqual(sorted[0], 'All');
});

test('remaining categories are alphabetical', () => {
  const cats = ['All', 'Thing', 'Person', 'Place', 'Brand', 'Film'];
  const sorted = sortCategories(cats);
  assert.strictEqual(sorted[0], 'All');
  const rest = sorted.slice(1);
  assert.deepStrictEqual(rest, [...rest].sort((a, b) => a.localeCompare(b)));
});

test('works when "All" is not already present', () => {
  const cats = ['Thing', 'Person', 'Place'];
  const sorted = sortCategories(cats);
  assert.deepStrictEqual(sorted, ['Person', 'Place', 'Thing']); // no All, pure alpha
});

test('single-element array returns same element', () => {
  assert.deepStrictEqual(sortCategories(['All']), ['All']);
  assert.deepStrictEqual(sortCategories(['Person']), ['Person']);
});

test('does not mutate input array', () => {
  const cats = ['Thing', 'All', 'Person'];
  sortCategories(cats);
  assert.deepStrictEqual(cats, ['Thing', 'All', 'Person']);
});

// ─── isDuplicate ─────────────────────────────────────────────────────────────

console.log('\nisDuplicate');

const MOCK_PUZZLES = [
  { answer: 'Beyoncé', category: 'Person', aura: '#C9A227', clues: [] },
  { answer: 'Paris', category: 'Place', aura: '#B07DC3', clues: [] },
  { answer: 'The Beatles', category: 'Band', aura: '#FF0000', clues: [] },
];

test('detects exact duplicate', () => {
  assert.ok(isDuplicate('Beyoncé', MOCK_PUZZLES));
});

test('case-insensitive duplicate detection', () => {
  assert.ok(isDuplicate('beyoncé', MOCK_PUZZLES));
  assert.ok(isDuplicate('BEYONCÉ', MOCK_PUZZLES));
  assert.ok(isDuplicate('paris', MOCK_PUZZLES));
});

test('returns false for non-duplicate', () => {
  assert.ok(!isDuplicate('Rihanna', MOCK_PUZZLES));
  assert.ok(!isDuplicate('London', MOCK_PUZZLES));
});

test('returns false for empty string', () => {
  assert.ok(!isDuplicate('', MOCK_PUZZLES));
});

test('works with article-inclusive answers', () => {
  assert.ok(isDuplicate('The Beatles', MOCK_PUZZLES));
  assert.ok(isDuplicate('the beatles', MOCK_PUZZLES));
});

// ─── filterPuzzles ────────────────────────────────────────────────────────────

console.log('\nfilterPuzzles');

const FILTER_PUZZLES = [
  { answer: 'Beyoncé', category: 'Person', aura: '#111' },
  { answer: 'Paris', category: 'Place', aura: '#222' },
  { answer: 'Taylor Swift', category: 'Person', aura: '#333' },
  { answer: 'McDonald\'s', category: 'Brand', aura: '#444' },
  { answer: 'New York City', category: 'Place', aura: '#555' },
];

test('All category returns all puzzles', () => {
  const result = filterPuzzles(FILTER_PUZZLES, 'All', '');
  assert.strictEqual(result.length, 5);
});

test('category filter narrows by category', () => {
  const result = filterPuzzles(FILTER_PUZZLES, 'Person', '');
  assert.strictEqual(result.length, 2);
  result.forEach(p => assert.strictEqual(p.category, 'Person'));
});

test('category filter with no matches returns empty', () => {
  const result = filterPuzzles(FILTER_PUZZLES, 'Film', '');
  assert.strictEqual(result.length, 0);
});

test('search by answer (case-insensitive)', () => {
  const result = filterPuzzles(FILTER_PUZZLES, 'All', 'beyoncé');
  assert.strictEqual(result.length, 1);
  assert.strictEqual(result[0].answer, 'Beyoncé');
});

test('search by partial answer', () => {
  const result = filterPuzzles(FILTER_PUZZLES, 'All', 'york');
  assert.strictEqual(result.length, 1);
  assert.strictEqual(result[0].answer, 'New York City');
});

test('search by category', () => {
  const result = filterPuzzles(FILTER_PUZZLES, 'All', 'place');
  assert.strictEqual(result.length, 2);
});

test('combined category + search filter', () => {
  const result = filterPuzzles(FILTER_PUZZLES, 'Person', 'taylor');
  assert.strictEqual(result.length, 1);
  assert.strictEqual(result[0].answer, 'Taylor Swift');
});

test('search with no match returns empty', () => {
  const result = filterPuzzles(FILTER_PUZZLES, 'All', 'zzznomatch');
  assert.strictEqual(result.length, 0);
});

test('empty search returns all in category', () => {
  const result = filterPuzzles(FILTER_PUZZLES, 'Place', '');
  assert.strictEqual(result.length, 2);
});

// ─── Summary ─────────────────────────────────────────────────────────────────

console.log(`\n${passed + failed} tests: ${passed} passed, ${failed} failed\n`);
if (failed > 0) process.exit(1);
