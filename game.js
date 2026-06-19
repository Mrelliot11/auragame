// ── THEME ──
function initTheme() {
  const saved = localStorage.getItem('aura_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('aura_theme', theme);
  const isDark = theme === 'dark';
  ['ht-theme-btn', 'g-theme-btn'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.textContent = isDark ? '◑' : '○';
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  });
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// ── SOUND ──
let soundEnabled = false;
let audioCtx;

function initSound() {
  soundEnabled = localStorage.getItem('aura_sound') === 'on';
  syncSoundBtns();
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  localStorage.setItem('aura_sound', soundEnabled ? 'on' : 'off');
  syncSoundBtns();
  if (soundEnabled) playReveal();
}

function syncSoundBtns() {
  ['ht-sound-btn', 'g-sound-btn'].forEach(id => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.setAttribute('aria-pressed', String(soundEnabled));
    btn.setAttribute('aria-label', soundEnabled ? 'Disable sound' : 'Enable sound');
    btn.classList.toggle('active', soundEnabled);
  });
}

function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playTone(freq, type, duration, gain) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const vol = ctx.createGain();
    osc.connect(vol);
    vol.connect(ctx.destination);
    osc.type = type;
    osc.frequency.value = freq;
    vol.gain.setValueAtTime(gain, ctx.currentTime);
    vol.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {}
}

function playWin() {
  playTone(523, 'sine', 0.25, 0.25);
  setTimeout(() => playTone(659, 'sine', 0.25, 0.25), 140);
  setTimeout(() => playTone(784, 'sine', 0.4,  0.25), 280);
}

function playWrong() {
  playTone(180, 'square', 0.18, 0.15);
}

function playReveal() {
  playTone(440, 'sine', 0.12, 0.12);
}

// ── HAPTICS ──
function vibrate(pattern) {
  if (navigator.vibrate) navigator.vibrate(pattern);
}

// ── ACCESSIBILITY ──
function announce(msg) {
  const el = document.getElementById('sr-announce');
  el.textContent = '';
  requestAnimationFrame(() => { el.textContent = msg; });
}

function trapFocus(el) {
  const sel = 'button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';
  const focusable = Array.from(el.querySelectorAll(sel));
  if (!focusable.length) return;
  focusable[0].focus();
  el._trapHandler = function (e) {
    if (e.key !== 'Tab') return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  };
  el.addEventListener('keydown', el._trapHandler);
}

function releaseFocus(el) {
  if (el._trapHandler) {
    el.removeEventListener('keydown', el._trapHandler);
    delete el._trapHandler;
  }
}

// ── INTRO ──
function showIntro() {
  const intro = document.getElementById('intro');
  if (!intro) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (localStorage.getItem('aura_visited') || reduced) {
    intro.remove();
    return;
  }
  localStorage.setItem('aura_visited', '1');
  setTimeout(() => intro.remove(), 2200);
}

// ── COUNTDOWN ──
let countdownInterval;

function startCountdown() {
  const el = document.getElementById('countdown');
  if (!el) return;
  clearInterval(countdownInterval);
  function tick() {
    const now = new Date();
    const midnight = new Date();
    midnight.setUTCHours(24, 0, 0, 0);
    const diff = midnight - now;
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.textContent = `Next aura in ${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }
  tick();
  countdownInterval = setInterval(tick, 1000);
}

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

  clearInterval(countdownInterval);
  releaseFocus(document.getElementById('modal'));

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
    d.className = 'dot' + (i < cluesShown ? ' used' : '');
    row.appendChild(d);
  }
  row.setAttribute('aria-label', `Clue ${cluesShown} of ${puzzle.clues.length} revealed`);
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
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Reveal clue ${i + 1}`);
    card.onclick = revealNext;
    card.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); revealNext(); } };
    const inner = document.createElement('div');
    inner.className = 'lock-text';
    inner.innerHTML = `<span aria-hidden="true">— — —</span> Clue ${i + 1} <span aria-hidden="true">— — —</span>`;
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
  playReveal();
  vibrate(30);
  announce(`Clue ${cluesShown} revealed.`);
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
    playWin();
    vibrate([50, 50, 100]);
    announce(`Correct! The answer is ${puzzle.answer}.`);
    setTimeout(() => showResult(true), 300);
  } else {
    wrongGuesses++;
    field.value = '';
    playWrong();
    vibrate(80);

    if (wrongGuesses >= MAX_WRONG) {
      gameOver = true;
      announce(`Game over. The answer was ${puzzle.answer}.`);
      showResult(false);
    } else {
      const remaining = MAX_WRONG - wrongGuesses;
      const msg = `Not quite — ${remaining} guess${remaining !== 1 ? 'es' : ''} left`;
      document.getElementById('wrong-msg').textContent = msg;
      announce(msg);
      field.style.animation = 'none';
      void field.offsetWidth;
      field.style.animation = 'shake 0.4s ease';
      field.style.borderColor = '#E05C5C';
      setTimeout(() => { field.style.borderColor = ''; field.style.animation = ''; }, 500);
    }
  }
}

// ── RESULT ──
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

  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
  startCountdown();
  trapFocus(modal);
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
initTheme();
initSound();
showIntro();

document.getElementById('ht-num').textContent = getDayIndex() + 1;
const todayPuzzle = PUZZLES[getDayIndex()];
setAura(todayPuzzle.aura);
document.getElementById('start-btn').style.background = todayPuzzle.aura;
