// ── HELPERS ──
function normalize(s) {
  return s.toLowerCase()
    .replace(/^(the |a |an )/, '')
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

function getDayIndex() {
  const epoch = new Date('2025-01-01T00:00:00Z');
  return Math.floor((Date.now() - epoch) / 86400000) % PUZZLES.length;
}

function setAura(color) {
  document.documentElement.style.setProperty('--aura', color);
}

// ── STATE ──
let puzzle, cluesShown, wrongGuesses, gameOver, shareStr;
const MAX_WRONG = 3;

function goHow() {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('how-to').classList.add('active');
}

function startGame() {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('game').classList.add('active');
  initGame();
}

function initGame() {
  const idx = getDayIndex();
  puzzle = PUZZLES[idx];
  cluesShown = 1;
  wrongGuesses = 0;
  gameOver = false;
  shareStr = '';

  setAura(puzzle.aura);
  document.getElementById('g-num').textContent = idx + 1;
  document.getElementById('ht-num').textContent = idx + 1;
  document.getElementById('meta-cat').textContent = puzzle.category;
  document.getElementById('guess-field').value = '';
  document.getElementById('wrong-msg').textContent = '';
  document.getElementById('modal').style.display = 'none';

  renderDots();
  renderClues();
  updateRevealBtn();
}

function renderDots() {
  const row = document.getElementById('dots-row');
  row.innerHTML = '';
  for (let i = 0; i < puzzle.clues.length; i++) {
    const d = document.createElement('div');
    d.className = 'dot';
    if (i < cluesShown) d.classList.add('used');
    row.appendChild(d);
  }
}

function renderClues() {
  const list = document.getElementById('clues-list');
  list.innerHTML = '';

  for (let i = 0; i < cluesShown; i++) {
    const card = document.createElement('div');
    card.className = 'clue-card';
    const num = document.createElement('div');
    num.className = 'clue-num';
    num.textContent = `Clue ${i + 1}`;
    const txt = document.createElement('div');
    txt.className = 'clue-text';
    txt.textContent = `"${puzzle.clues[i]}"`;
    card.appendChild(num);
    card.appendChild(txt);
    list.appendChild(card);
  }

  for (let i = cluesShown; i < puzzle.clues.length; i++) {
    const card = document.createElement('div');
    card.className = 'clue-card locked';
    card.onclick = revealNext;
    const inner = document.createElement('div');
    inner.className = 'lock-text';
    inner.innerHTML = `<span style="opacity:0.5">— — —</span> Clue ${i + 1} <span style="opacity:0.5">— — —</span>`;
    card.appendChild(inner);
    list.appendChild(card);
  }

  document.getElementById('clue-count').textContent = cluesShown;

  setTimeout(() => {
    const body = document.getElementById('game-body');
    body.scrollTop = body.scrollHeight;
  }, 80);
}

function revealNext() {
  if (gameOver) return;
  if (cluesShown >= puzzle.clues.length) {
    showToast('All clues revealed');
    return;
  }
  cluesShown++;
  renderDots();
  renderClues();
  updateRevealBtn();
}

function updateRevealBtn() {
  const btn = document.getElementById('reveal-btn');
  if (cluesShown >= puzzle.clues.length) {
    btn.textContent = 'All clues shown';
    btn.disabled = true;
    btn.style.opacity = '0.3';
  } else {
    btn.textContent = 'Next clue ↓';
    btn.disabled = false;
    btn.style.opacity = '';
  }
}

function submitGuess() {
  if (gameOver) return;
  const field = document.getElementById('guess-field');
  const raw = field.value.trim();
  if (!raw) return;

  const guess = normalize(raw);
  const answer = normalize(puzzle.answer);

  if (guess === answer) {
    gameOver = true;
    field.blur();
    document.getElementById('aura-orb').classList.add('bloom');
    setTimeout(() => showResult(true), 300);
  } else {
    wrongGuesses++;
    field.value = '';

    if (wrongGuesses >= MAX_WRONG) {
      gameOver = true;
      showResult(false);
    } else {
      const msgs = [
        `Not quite — ${MAX_WRONG - wrongGuesses} guess${MAX_WRONG - wrongGuesses !== 1 ? 'es' : ''} left`,
        'Still wrong — 1 guess left',
      ];
      document.getElementById('wrong-msg').textContent = msgs[wrongGuesses - 1] || '';
      field.style.animation = 'none';
      void field.offsetWidth;
      field.style.animation = 'shake 0.4s ease';
      field.style.borderColor = '#E05C5C';
      setTimeout(() => { field.style.borderColor = ''; field.style.animation = ''; }, 500);
    }
  }
}

function showResult(won) {
  const idx = getDayIndex();
  const cluesUsed = cluesShown;

  document.getElementById('m-eye').textContent = won ? 'YOU FELT IT' : 'TODAY\'S AURA WAS';
  document.getElementById('m-answer').textContent = puzzle.answer;
  document.getElementById('m-cat-label').textContent = puzzle.category.toUpperCase();

  const scoreEl = document.getElementById('m-score');
  if (won) {
    const label = cluesUsed === 1 ? '⚡ First clue!' : cluesUsed <= 2 ? '✦ Sharp instinct' : cluesUsed <= 3 ? '◎ Good read' : '→ Got there';
    scoreEl.innerHTML = `<b>${cluesUsed}</b> clue${cluesUsed !== 1 ? 's' : ''} &nbsp;·&nbsp; ${label}`;
  } else {
    scoreEl.innerHTML = '<span style="color:#E05C5C">◌ The aura escaped you today</span>';
  }

  const dots = [];
  for (let i = 0; i < puzzle.clues.length; i++) {
    if (i < cluesUsed - 1) dots.push('🟣');
    else if (i === cluesUsed - 1 && won) dots.push('✨');
    else if (i === cluesUsed - 1 && !won) dots.push('⚫');
    else dots.push('⬜');
  }
  const dotsStr = dots.join('');

  document.getElementById('s-title').textContent = `AURA #${idx + 1}`;
  document.getElementById('s-sub').textContent = won ? `${cluesUsed}/5 clues` : 'Did not get it';
  document.getElementById('s-dots').textContent = dotsStr;

  shareStr = `AURA #${idx + 1}\n${puzzle.category}\n\n${dotsStr}\n\n${won ? `Got it in ${cluesUsed}/5 clues 👻` : `Couldn't place it 🌫️`}\nplay at: aura.game`;

  document.getElementById('modal').style.display = 'flex';
}

function copyShare() {
  navigator.clipboard.writeText(shareStr)
    .then(() => showToast('Copied!'))
    .catch(() => showToast('Copy the text above'));
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 2200);
}

// ── BOOT ──
document.getElementById('ht-num').textContent = getDayIndex() + 1;
const todayPuzzle = PUZZLES[getDayIndex()];
setAura(todayPuzzle.aura);
document.getElementById('start-btn').style.background = todayPuzzle.aura;
