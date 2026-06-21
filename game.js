// ── BACKEND CONFIG ──────────────────────────────────────────────────────────
// 🔌 CONNECTION point 1 of 2: set to your deployed Cloudflare Worker URL.
//    Enables global stats display and daily push notifications.
//    Leave as null to run fully offline — all game features still work.
const API_URL = null; // e.g. 'https://aura-game.YOUR_SUBDOMAIN.workers.dev'

// 🔌 Connection point 2 of 2: VAPID public key for Web Push subscriptions.
//    Run `cd backend && npm run generate-keys` to generate, then set the
//    matching private key + email as Cloudflare Worker secrets.
const PUSH_PUBLIC_KEY = null; // e.g. 'BPxxxxxxxxxxxxxxxx...'
// ─────────────────────────────────────────────────────────────────────────────

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
  ['ht-theme-btn', 'g-theme-btn', 'st-theme-btn', 'ar-theme-btn'].forEach(id => {
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

// ── DATE & PERSISTENCE ──
function getUTCDateKey(daysAgo) {
  daysAgo = daysAgo || 0;
  const d = new Date(Date.now() - daysAgo * 86400000);
  const y = d.getUTCFullYear();
  const mo = String(d.getUTCMonth() + 1).padStart(2, '0');
  const da = String(d.getUTCDate()).padStart(2, '0');
  return `aura_result_${y}-${mo}-${da}`;
}

function getTodayResult() {
  const raw = localStorage.getItem(getUTCDateKey());
  return raw ? JSON.parse(raw) : null;
}

function saveResult(won, cluesUsed) {
  const key = isReplay ? getUTCDateKey(replayDaysAgo) : getUTCDateKey();
  const existing = localStorage.getItem(key);

  // Never overwrite a genuine stored result. Replaying a past day must not
  // alter its original outcome (which would corrupt the archive streak); a
  // replay only records a result for a day that was never played.
  if (existing) return;

  const data = { won, cluesUsed, ts: Date.now() };
  localStorage.setItem(key, JSON.stringify(data));

  // Only update stats for fresh plays, not replays
  if (!isReplay) {
    updateStats(won, cluesUsed);
    reportResultToAPI(won, cluesUsed, getDayIndex());
  }
}

// ── STATS ──
function getStats() {
  const raw = localStorage.getItem('aura_stats');
  const stats = raw ? JSON.parse(raw) : {};
  return {
    currentStreak: stats.currentStreak || 0,
    maxStreak: stats.maxStreak || 0,
    totalPlayed: stats.totalPlayed || 0,
    totalWon: stats.totalWon || 0,
    distribution: (Array.isArray(stats.distribution) && stats.distribution.length === 5) ? stats.distribution : [0, 0, 0, 0, 0],
  };
}

function saveStats(stats) {
  localStorage.setItem('aura_stats', JSON.stringify(stats));
}

function updateStats(won, cluesUsed) {
  const stats = getStats();
  stats.totalPlayed++;
  if (won) {
    stats.totalWon++;
    stats.distribution[cluesUsed - 1]++;
    const yesterdayRaw = localStorage.getItem(getUTCDateKey(1));
    if (yesterdayRaw && JSON.parse(yesterdayRaw).won) {
      stats.currentStreak++;
    } else {
      stats.currentStreak = 1;
    }
    stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);
  } else {
    stats.currentStreak = 0;
  }
  saveStats(stats);
}

// ── GUESS MATCHING ──
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
    .replace(/[\u0300-\u036F]/g, '')
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

// ── BACKEND API ──────────────────────────────────────────────────────────────

async function apiPost(path, body) {
  if (!API_URL) return null;
  try {
    const r = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return r.ok ? r.json() : null;
  } catch { return null; }
}

async function apiGet(path) {
  if (!API_URL) return null;
  try {
    const r = await fetch(`${API_URL}${path}`);
    return r.ok ? r.json() : null;
  } catch { return null; }
}

// ── PUZZLE FETCH ─────────────────────────────────────────────────────────────
// Returns puzzle object from API when connected, falls back to puzzles.js.
// Caches in sessionStorage so replays and page interactions don't re-fetch.

async function fetchPuzzle(idx) {
  const cacheKey = `aura_puzzle_${idx}`;
  const cached = sessionStorage.getItem(cacheKey);
  if (cached) return JSON.parse(cached);

  if (API_URL) {
    try {
      const r = await fetch(`${API_URL}/api/puzzle/${idx}`);
      if (r.ok) {
        const data = await r.json();
        sessionStorage.setItem(cacheKey, JSON.stringify(data));
        return data;
      }
    } catch {}
  }

  // Offline fallback — use puzzles.js
  return PUZZLES[idx] || null;
}

async function fetchTodayPuzzle() {
  const cacheKey = `aura_puzzle_today_${getUTCDateKey()}`;
  const cached = sessionStorage.getItem(cacheKey);
  if (cached) return JSON.parse(cached);

  if (API_URL) {
    try {
      const r = await fetch(`${API_URL}/api/puzzle/today`);
      if (r.ok) {
        const data = await r.json();
        sessionStorage.setItem(cacheKey, JSON.stringify(data));
        // Also cache by idx so fetchPuzzle(idx) hits cache too
        sessionStorage.setItem(`aura_puzzle_${data.idx}`, JSON.stringify(data));
        return data;
      }
    } catch {}
  }

  // Offline fallback
  const idx = getDayIndex();
  return { idx, ...PUZZLES[idx] };
}

function reportResultToAPI(won, cluesUsed, puzzleIdx) {
  apiPost('/api/result', { puzzleIdx, won, cluesUsed });
}

async function fetchGlobalStats(puzzleIdx) {
  const data = await apiGet(`/api/stats/${puzzleIdx}`);
  if (!data || !data.total) return;
  const el = document.getElementById('m-global');
  if (!el) return;
  const pct = Math.round((data.wins / data.total) * 100);
  el.innerHTML = `
    <div class="m-global-title">Global</div>
    <div class="m-global-row">
      <span>${data.total.toLocaleString()} players</span>
      <span>${pct}% got it</span>
    </div>`;
  el.style.display = '';
}

// ── PUSH NOTIFICATIONS ───────────────────────────────────────────────────────

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  return Uint8Array.from(atob(base64), c => c.charCodeAt(0));
}

async function subscribeToPush() {
  if (!PUSH_PUBLIC_KEY || !API_URL) return;
  if (!('PushManager' in window)) return;
  try {
    const reg = await navigator.serviceWorker.ready;
    const existing = await reg.pushManager.getSubscription();
    if (existing) return;
    const sub = await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(PUSH_PUBLIC_KEY),
    });
    await apiPost('/api/push/subscribe', sub.toJSON());
  } catch {}
}

async function offerPushNotifications() {
  if (!PUSH_PUBLIC_KEY || !API_URL) return;
  if (!('PushManager' in window) || !('Notification' in window)) return;
  if (Notification.permission === 'denied') return;
  if (Notification.permission === 'granted') { subscribeToPush(); return; }
  const result = await Notification.requestPermission();
  if (result === 'granted') subscribeToPush();
}

// ── HELPERS ──
const EPOCH = new Date('2026-01-01T00:00:00Z');

function getDayIndex() {
  return Math.floor((Date.now() - EPOCH) / 86400000) % PUZZLES.length;
}

function getDaysElapsed() {
  return Math.floor((Date.now() - EPOCH) / 86400000);
}

function getPuzzleIndexForDaysAgo(daysAgo) {
  const raw = Math.floor((Date.now() - daysAgo * 86400000 - EPOCH) / 86400000);
  return ((raw % PUZZLES.length) + PUZZLES.length) % PUZZLES.length;
}

function setAura(color) {
  document.documentElement.style.setProperty('--aura', color);
}

// ── ADMIN ──
function openAdmin() {
  window.location.href = 'admin/';
}

// ── NAVIGATION ──
function updateStartBtn() {
  const btn = document.getElementById('start-btn');
  if (!btn) return;
  const done = !!getTodayResult();
  btn.textContent = done ? 'See today\'s result →' : 'Feel today\'s aura →';
}

function goHow() {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('how-to').classList.add('active');
  setAura(PUZZLES[getDayIndex()].aura);
  updateStartBtn();
}

function goStats() {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('stats').classList.add('active');
  renderStats();
}

function goArchive() {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('archive').classList.add('active');
  document.getElementById('aura-orb').classList.remove('bloom');
  renderArchive();
}

async function startGame() {
  const result = getTodayResult();
  if (result) {
    loadCompletedGame(result);
    return;
  }
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('game').classList.add('active');
  const p = await fetchTodayPuzzle();
  initGame(p.idx, false, p);
}

// ── STATE ──
let puzzle, cluesShown, wrongGuesses, gameOver, shareStr, isReplay, replayDaysAgo;
const MAX_WRONG = 3;

function initGame(puzzleIdx, replayMode, puzzleData) {
  if (puzzleIdx === undefined) puzzleIdx = getDayIndex();
  isReplay = !!replayMode;

  puzzle = puzzleData || PUZZLES[puzzleIdx];
  cluesShown = 1;
  wrongGuesses = 0;
  gameOver = false;
  shareStr = '';

  clearInterval(countdownInterval);
  releaseFocus(document.getElementById('modal'));

  setAura(puzzle.aura);
  document.getElementById('g-num').textContent = puzzleIdx + 1;
  document.getElementById('meta-cat').textContent = puzzle.category;
  document.getElementById('guess-field').value = '';
  document.getElementById('wrong-msg').textContent = '';
  document.getElementById('modal').style.display = 'none';
  document.getElementById('aura-orb').classList.remove('bloom');

  const banner = document.getElementById('replay-banner');
  banner.style.display = isReplay ? 'flex' : 'none';

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

let revealing = false;
function revealNext() {
  if (gameOver || revealing) return;
  if (cluesShown >= puzzle.clues.length) {
    showToast('All clues revealed');
    return;
  }
  revealing = true;
  cluesShown++;
  renderDots();
  renderClues();
  updateRevealBtn();
  playReveal();
  vibrate(30);
  announce(`Clue ${cluesShown} revealed.`);
  setTimeout(() => { revealing = false; }, 300);
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

  if (checkGuess(raw, puzzle.answer)) {
    gameOver = true;
    field.value = '';
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
  const cluesUsed = cluesShown;
  const puzzleIdx = isReplay ? getPuzzleIndexForDaysAgo(replayDaysAgo) : getDayIndex();

  saveResult(won, cluesUsed);

  // On loss: reveal all remaining clues in the game background
  if (!won && cluesShown < puzzle.clues.length) {
    cluesShown = puzzle.clues.length;
    renderDots();
    renderClues();
    updateRevealBtn();
  }

  document.getElementById('m-eye').textContent = won ? 'YOU FELT IT' : (isReplay ? 'THE AURA WAS' : 'TODAY\'S AURA WAS');
  document.getElementById('m-answer').textContent = puzzle.answer;
  document.getElementById('m-cat-label').textContent = puzzle.category.toUpperCase();

  const scoreEl = document.getElementById('m-score');
  if (won) {
    const label = cluesUsed === 1 ? '⚡ First clue!' : cluesUsed <= 2 ? '✦ Sharp instinct' : cluesUsed <= 3 ? '◎ Good read' : '→ Got there';
    scoreEl.innerHTML = `<b>${cluesUsed}</b> clue${cluesUsed !== 1 ? 's' : ''} &nbsp;·&nbsp; ${label}`;
  } else {
    scoreEl.innerHTML = '<span style="color:#E05C5C">◌ The aura escaped you today</span>';
  }

  const streakEl = document.getElementById('m-streak');
  if (!isReplay && won) {
    const stats = getStats();
    streakEl.textContent = stats.currentStreak >= 2 ? `🔥 ${stats.currentStreak} day streak` : '';
  } else {
    streakEl.textContent = '';
  }

  // Show unrevealed clues inside the modal on loss
  const missedEl = document.getElementById('m-missed');
  if (!won && missedEl) {
    const missed = puzzle.clues.slice(cluesUsed);
    if (missed.length > 0) {
      missedEl.innerHTML =
        '<div class="m-missed-label">Clues you didn\'t see</div>' +
        missed.map((clue, i) =>
          `<div class="m-missed-clue"><span class="m-missed-num">Clue ${cluesUsed + i + 1}</span>"${clue}"</div>`
        ).join('');
      missedEl.style.display = '';
    } else {
      missedEl.style.display = 'none';
    }
  } else if (missedEl) {
    missedEl.style.display = 'none';
  }

  const dots = [];
  for (let i = 0; i < puzzle.clues.length; i++) {
    if (i < cluesUsed - 1) dots.push('🟣');
    else if (i === cluesUsed - 1 && won) dots.push('✨');
    else if (i === cluesUsed - 1 && !won) dots.push('⚫');
    else dots.push('⬜');
  }
  const dotsStr = dots.join('');

  document.getElementById('s-title').textContent = `AURA #${puzzleIdx + 1}`;
  document.getElementById('s-sub').textContent = won ? `${cluesUsed}/5 clues` : 'Did not get it';
  document.getElementById('s-dots').textContent = dotsStr;

  shareStr = `AURA #${puzzleIdx + 1}\n${puzzle.category}\n\n${dotsStr}\n\n${won ? `Got it in ${cluesUsed}/5 clues 👻` : `Couldn't place it 🌫️`}\nmrelliot11.github.io/auragame`;

  // Replays and live wins return to the archive; an unsolved live puzzle
  // goes back to How to Play.
  const toArchive = isReplay || won;
  const dest = toArchive ? goArchive : goHow;
  const backBtn = document.getElementById('m-back-btn');
  backBtn.onclick = dest;
  backBtn.textContent = toArchive ? '← Archive' : '← How to play';
  const closeBtn = document.getElementById('m-close-btn');
  if (closeBtn) { closeBtn.onclick = dest; closeBtn.setAttribute('aria-label', toArchive ? 'Back to archive' : 'Close'); }

  const countdownEl = document.getElementById('countdown');
  if (!isReplay) {
    countdownEl.style.display = '';
    startCountdown();
  } else {
    countdownEl.style.display = 'none';
    clearInterval(countdownInterval);
  }

  const globalEl = document.getElementById('m-global');
  if (globalEl) globalEl.style.display = 'none';
  if (!isReplay) {
    fetchGlobalStats(puzzleIdx);
    if (won && !localStorage.getItem('aura_push_asked')) {
      localStorage.setItem('aura_push_asked', '1');
      setTimeout(offerPushNotifications, 1200);
    }
  }

  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
  trapFocus(modal);
}

// ── COLOR UTIL ──
function hexToRgb(hex) {
  const h = hex.trim().replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

// ── STATS SCREEN ──
function renderStats() {
  const body = document.getElementById('stats-body');
  const stats = getStats();

  if (stats.totalPlayed === 0) {
    body.innerHTML = '<div class="stats-empty">No games played yet.<br>Come back after today\'s puzzle!</div>';
    return;
  }

  const winPct = Math.round((stats.totalWon / stats.totalPlayed) * 100);
  const maxVal = Math.max(...stats.distribution, 1);

  body.innerHTML = `
    <div class="stats-summary">
      <div class="stat-tile"><div class="stat-val">${stats.totalPlayed}</div><div class="stat-lbl">Played</div></div>
      <div class="stat-tile"><div class="stat-val">${winPct}</div><div class="stat-lbl">Win %</div></div>
      <div class="stat-tile"><div class="stat-val">${stats.currentStreak}</div><div class="stat-lbl">Streak</div></div>
      <div class="stat-tile"><div class="stat-val">${stats.maxStreak}</div><div class="stat-lbl">Best</div></div>
    </div>
    <div class="dist-label">Guess distribution</div>
    ${stats.distribution.map((n, i) => {
      const pct = Math.round((n / maxVal) * 100);
      return `<div class="dist-row">
        <div class="dist-num">Clue ${i + 1}</div>
        <div class="dist-bar-wrap">
          <div class="dist-bar" data-pct="${pct}" style="width:0%"></div>
          <div class="dist-count">${n}</div>
        </div>
      </div>`;
    }).join('')}
  `;

  requestAnimationFrame(() => {
    body.querySelectorAll('.dist-bar').forEach(bar => {
      bar.style.width = bar.dataset.pct + '%';
    });
  });
}

// ── ARCHIVE SCREEN ──
let archiveFilter = 'all'; // 'all' | 'played' | 'unplayed'

function setArchiveFilter(f) {
  archiveFilter = f;
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === f);
  });
  renderArchiveItems();
}

function renderArchive() {
  archiveFilter = 'all';
  renderArchiveItems();
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === 'all');
  });
}

function toggleArchiveMonth(btn) {
  const open = btn.classList.toggle('open');
  btn.nextElementSibling.classList.toggle('collapsed', !open);
}

function renderArchiveItems() {
  const list = document.getElementById('archive-list');
  const savedScroll = list.scrollTop;
  const daysElapsed = getDaysElapsed();

  // Include today (daysAgo 0) at the head of the chain. Cap at length - 1 so
  // today + past entries never exceed PUZZLES.length (no duplicates after a
  // full rotation).
  const maxDaysAgo = Math.min(daysElapsed, PUZZLES.length - 1);
  const items = [];

  // Collect all items (most recent first, today first)
  for (let daysAgo = 0; daysAgo <= maxDaysAgo; daysAgo++) {
    const pIdx = getPuzzleIndexForDaysAgo(daysAgo);
    const p = PUZZLES[pIdx];
    const key = getUTCDateKey(daysAgo);
    const resultRaw = localStorage.getItem(key);
    const result = resultRaw ? JSON.parse(resultRaw) : null;

    if (archiveFilter === 'played' && !result) continue;
    if (archiveFilter === 'unplayed' && result) continue;

    const d = new Date(Date.now() - daysAgo * 86400000);
    const dateStr = daysAgo === 0
      ? 'Today'
      : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
    const monthKey = d.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });

    items.push({ daysAgo, pIdx, p, result, dateStr, d, monthKey });
  }

  if (items.length === 0) {
    list.innerHTML = '<div class="archive-empty">No puzzles match this filter yet.</div>';
    return;
  }

  // Compute streak from results. An unplayed *today* doesn't break the streak
  // (the day isn't over yet); a played-and-lost today does.
  let streak = 0;
  for (let daysAgo = 0; daysAgo <= maxDaysAgo; daysAgo++) {
    const resultRaw = localStorage.getItem(getUTCDateKey(daysAgo));
    const result = resultRaw ? JSON.parse(resultRaw) : null;
    if (result && result.won) streak++;
    else if (daysAgo === 0 && !result) continue;
    else break;
  }

  // Update header
  document.getElementById('archive-streak').textContent = streak > 0 ? `·${streak}-day streak` : '';

  // Group items by month
  const monthGroups = {};
  items.forEach(item => {
    if (!monthGroups[item.monthKey]) monthGroups[item.monthKey] = [];
    monthGroups[item.monthKey].push(item);
  });

  // Render months as collapsible groups
  let html = '';
  Object.keys(monthGroups).forEach(monthKey => {
    const groupItems = monthGroups[monthKey];
    const monthId = monthKey.replace(/\s+/g, '-').toLowerCase();
    const isExpanded = localStorage.getItem(`archive-expanded-${monthId}`) !== 'false';

    html += `
      <div class="archive-month-group">
        <button class="archive-month-btn" onclick="toggleArchiveMonth('${monthId}')" aria-expanded="${isExpanded}">
          <span class="month-label">${monthKey}</span>
          <span class="month-count">${groupItems.length}</span>
          <span class="month-toggle">${isExpanded ? '−' : '+'}</span>
        </button>
        <div class="archive-month-items constellation-thread" id="${monthId}" style="display: ${isExpanded ? 'block' : 'none'};">
    `;

    groupItems.forEach(({ daysAgo, pIdx, p, result, dateStr }, i) => {
      const played = !!result;
      const won = result && result.won;
      const num = String(pIdx + 1).padStart(3, '0');

      // Connector to the next node: gradient from this node's color to the
      // next one's. Unplayed puzzles contribute transparent, so the dotted
      // line fades out toward unfinished games.
      let connectorHtml = '';
      if (i < groupItems.length - 1) {
        const cTop = played ? p.aura : 'transparent';
        const next = groupItems[i + 1];
        const cBot = next.result ? next.p.aura : 'transparent';
        connectorHtml = `<div class="constellation-connector" style="--c-top:${cTop};--c-bot:${cBot};"></div>`;
      }

      let nodeClass = 'constellation-node';
      if (won) nodeClass += ' win';
      else if (played) nodeClass += ' loss';
      else nodeClass += ' unplayed';

      const answerColor = played ? p.aura : 'var(--dim)';
      const answerText = played ? p.answer : `Aura #${num}`;
      const clueLabel = won ? `Solved in ${result.cluesUsed} of 5 clues` : (played ? 'Missed — all 5 clues' : 'Not played yet');

      // Build node with proper styling for aura glow
      let nodeHtml = '';
      if (won) {
        const rgb = hexToRgb(p.aura).join(',');
        nodeHtml = `<div class="${nodeClass}" style="
          background: radial-gradient(circle at 35% 30%, rgba(255,255,255,1), ${p.aura}, rgba(${rgb},0.3) 60%, rgba(${rgb},0.1) 75%);
          box-shadow: 0 0 24px ${p.aura}dd, 0 0 12px ${p.aura}99, inset 0 0 10px ${p.aura}77;
          border: 1px solid rgba(${rgb},0.5);
        "></div>`;
      } else if (played) {
        nodeHtml = `<div class="${nodeClass}" style="background: ${p.aura}; opacity: 1;"></div>`;
      } else {
        nodeHtml = `<div class="${nodeClass}" style="border: 1.5px solid #45454f; background: var(--bg);"></div>`;
      }

      // Today is played live (counts for stats) and, if already done, opens its
      // result. Past days replay (no stats impact).
      const isToday = daysAgo === 0;
      const actionText = isToday ? (played ? 'View ↗' : 'Play ↗') : (played ? 'Replay ↗' : 'Play ↗');
      const actionCall = isToday ? 'startGame()' : `startReplay(${daysAgo})`;
      html += `
        <div class="constellation-item">
          ${connectorHtml}
          ${nodeHtml}
          <div class="constellation-content">
            <div class="constellation-eyebrow">${dateStr.toUpperCase()} · ${p.category.toUpperCase()}</div>
            <div class="constellation-answer" style="color:${answerColor};">${answerText}</div>
            <div class="constellation-clue">${clueLabel}</div>
          </div>
          <button class="constellation-action" onclick="${actionCall}" aria-label="${actionText}">${actionText}</button>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  list.innerHTML = html;
  list.scrollTop = savedScroll;
}

function toggleArchiveMonth(monthId) {
  const container = document.getElementById(monthId);
  const btn = container.previousElementSibling;
  const isExpanded = container.style.display !== 'none';
  container.style.display = isExpanded ? 'none' : 'block';
  btn.setAttribute('aria-expanded', !isExpanded);
  const toggle = btn.querySelector('.month-toggle');
  toggle.textContent = isExpanded ? '+' : '−';
  localStorage.setItem(`archive-expanded-${monthId}`, !isExpanded);
}

async function startReplay(daysAgo) {
  replayDaysAgo = daysAgo;
  const pIdx = getPuzzleIndexForDaysAgo(daysAgo);
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('game').classList.add('active');
  const p = await fetchPuzzle(pIdx);
  initGame(pIdx, true, p);
}

// ── LOAD COMPLETED GAME ──
function loadCompletedGame(result) {
  const idx = getDayIndex();
  puzzle = PUZZLES[idx];
  cluesShown = Math.max(1, Math.min(result.cluesUsed, puzzle.clues.length));
  wrongGuesses = result.won ? 0 : MAX_WRONG;
  gameOver = true;
  isReplay = false;
  replayDaysAgo = 0;

  setAura(puzzle.aura);
  document.getElementById('g-num').textContent = idx + 1;
  document.getElementById('meta-cat').textContent = puzzle.category;
  document.getElementById('guess-field').value = '';
  document.getElementById('wrong-msg').textContent = '';
  document.getElementById('modal').style.display = 'none';
  document.getElementById('replay-banner').style.display = 'none';

  if (result.won) document.getElementById('aura-orb').classList.add('bloom');

  renderDots();
  renderClues();
  updateRevealBtn();

  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('game').classList.add('active');
  showResult(result.won);
}

// ── SHARE ──
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

// Boot: set aura from local puzzles.js immediately (no flash), then update
// from API in the background so the color is correct if DB differs.
document.getElementById('ht-num').textContent = getDayIndex() + 1;
setAura(PUZZLES[getDayIndex()].aura);
updateStartBtn();
fetchTodayPuzzle().then(p => {
  if (p && p.aura) setAura(p.aura);
  document.getElementById('ht-num').textContent = (p.idx ?? getDayIndex()) + 1;
});

