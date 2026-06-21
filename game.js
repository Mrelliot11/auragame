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
  if (isReplay) return;
  const key = getUTCDateKey();
  if (localStorage.getItem(key)) return;
  localStorage.setItem(key, JSON.stringify({ won, cluesUsed, ts: Date.now() }));
  updateStats(won, cluesUsed);
  reportResultToAPI(won, cluesUsed, getDayIndex());
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
const EPOCH = new Date('2025-01-01T00:00:00Z');

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
let puzzle, cluesShown, wrongGuesses, gameOver, shareStr, shareCanvas, isReplay, replayDaysAgo;
const MAX_WRONG = 3;

function initGame(puzzleIdx, replayMode, puzzleData) {
  if (puzzleIdx === undefined) puzzleIdx = getDayIndex();
  isReplay = !!replayMode;

  puzzle = puzzleData || PUZZLES[puzzleIdx];
  cluesShown = 1;
  wrongGuesses = 0;
  gameOver = false;
  shareStr = '';
  shareCanvas = null;

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

  if (!isReplay) saveResult(won, cluesUsed);

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

  const dest = isReplay ? goArchive : goHow;
  const backBtn = document.getElementById('m-back-btn');
  backBtn.onclick = dest;
  backBtn.textContent = isReplay ? '← Archive' : '← How to play';
  const closeBtn = document.getElementById('m-close-btn');
  if (closeBtn) { closeBtn.onclick = dest; closeBtn.setAttribute('aria-label', isReplay ? 'Back to archive' : 'Close'); }

  const countdownEl = document.getElementById('countdown');
  if (!isReplay) {
    countdownEl.style.display = '';
    startCountdown();
  } else {
    countdownEl.style.display = 'none';
    clearInterval(countdownInterval);
  }

  shareCanvas = generateShareImage(won, cluesUsed, puzzleIdx, dotsStr);

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

// ── SHARE IMAGE ──
function hexToRgb(hex) {
  const h = hex.trim().replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function generateShareImage(won, cluesUsed, puzzleIdx, dotsStr) {
  const p = PUZZLES[puzzleIdx];
  const S = 1080;
  const canvas = document.createElement('canvas');
  canvas.width = S;
  canvas.height = S;
  const ctx = canvas.getContext('2d');

  const auraHex = getComputedStyle(document.documentElement).getPropertyValue('--aura').trim();
  const [ar, ag, ab] = hexToRgb(auraHex);

  // Background
  ctx.fillStyle = '#1A1A1E';
  ctx.fillRect(0, 0, S, S);

  // Aura glow
  const glow = ctx.createRadialGradient(S / 2, S * 0.38, 0, S / 2, S * 0.38, S * 0.52);
  glow.addColorStop(0, `rgba(${ar},${ag},${ab},0.5)`);
  glow.addColorStop(1, `rgba(${ar},${ag},${ab},0)`);
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, S, S);

  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';

  // AURA wordmark
  ctx.fillStyle = 'rgba(255,255,255,0.92)';
  ctx.font = '300 100px "Cormorant Garamond", Georgia, serif';
  ctx.fillText('AURA', S / 2, 210);

  // Puzzle number + category
  ctx.fillStyle = '#5A5A68';
  ctx.font = '400 22px "DM Sans", Arial, sans-serif';
  ctx.fillText(`#${puzzleIdx + 1}  ·  ${p.category.toUpperCase()}`, S / 2, 258);

  // Divider
  ctx.strokeStyle = '#3A3A44';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(S / 2 - 90, 292);
  ctx.lineTo(S / 2 + 90, 292);
  ctx.stroke();

  // Dot trail
  ctx.font = '64px sans-serif';
  ctx.fillText(dotsStr, S / 2, 420);

  // Score
  ctx.fillStyle = '#9B9BA8';
  ctx.font = '300 28px "DM Sans", Arial, sans-serif';
  ctx.fillText(won ? `${cluesUsed} of 5 clues` : 'did not get it', S / 2, 490);

  // Answer
  if (won) {
    ctx.fillStyle = auraHex;
    ctx.font = 'italic 300 86px "Cormorant Garamond", Georgia, serif';
    if (ctx.measureText(p.answer).width > S * 0.84) {
      ctx.font = 'italic 300 58px "Cormorant Garamond", Georgia, serif';
    }
    ctx.fillText(p.answer, S / 2, 612);
  } else {
    ctx.fillStyle = '#E05C5C';
    ctx.font = '300 26px "DM Sans", Arial, sans-serif';
    ctx.fillText('the aura escaped you today', S / 2, 600);
  }

  // Footer branding
  ctx.fillStyle = '#3A3A44';
  ctx.font = '400 22px "DM Sans", Arial, sans-serif';
  ctx.fillText('mrelliot11.github.io/auragame', S / 2, S - 80);

  return canvas;
}

async function saveShareImage() {
  if (!shareCanvas) return;
  shareCanvas.toBlob(async blob => {
    const file = new File([blob], 'aura.png', { type: 'image/png' });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: 'AURA', text: shareStr });
        return;
      } catch (e) {
        if (e.name === 'AbortError') return;
      }
    }
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement('a'), { href: url, download: 'aura.png' });
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 'image/png');
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

  if (daysElapsed < 1) {
    list.innerHTML = '<div class="archive-empty">No past puzzles yet.<br>Check back tomorrow!</div>';
    return;
  }

  // Group entries by month
  const months = []; // [{ label, key, items: [] }]
  const monthIndex = {};
  const maxDaysAgo = Math.min(daysElapsed, PUZZLES.length);

  for (let daysAgo = 1; daysAgo <= maxDaysAgo; daysAgo++) {
    const pIdx = getPuzzleIndexForDaysAgo(daysAgo);
    const p = PUZZLES[pIdx];
    const resultRaw = localStorage.getItem(getUTCDateKey(daysAgo));
    const result = resultRaw ? JSON.parse(resultRaw) : null;

    if (archiveFilter === 'played' && !result) continue;
    if (archiveFilter === 'unplayed' && result) continue;

    const d = new Date(Date.now() - daysAgo * 86400000);
    const monthKey = d.toLocaleDateString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
    const dateStr = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', timeZone: 'UTC' });

    if (!monthIndex[monthKey]) {
      monthIndex[monthKey] = { label: monthKey, items: [] };
      months.push(monthIndex[monthKey]);
    }
    monthIndex[monthKey].items.push({ daysAgo, pIdx, p, result, dateStr });
  }

  if (months.length === 0) {
    list.innerHTML = '<div class="archive-empty">No puzzles match this filter yet.</div>';
    return;
  }

  let html = '';
  months.forEach((month, mIdx) => {
    const isFirst = mIdx === 0;
    const playedCount = month.items.filter(e => e.result).length;
    const countLabel = `${playedCount}/${month.items.length}`;
    html += `
      <button class="archive-month-btn${isFirst ? ' open' : ''}" onclick="toggleArchiveMonth(this)">
        <span class="archive-month-label">${month.label.toUpperCase()}</span>
        <span class="archive-month-meta">
          <span class="archive-month-count">${countLabel}</span>
          <span class="archive-month-chevron">▾</span>
        </span>
      </button>
      <div class="archive-month-items${isFirst ? '' : ' collapsed'}">`;

    month.items.forEach(({ daysAgo, pIdx, p, result, dateStr }) => {
      const resultIcon = result ? `<div class="archive-result">${result.won ? '✨' : '⚫'}</div>` : '';
      html += `
        <div class="archive-item">
          <div class="archive-info">
            <div class="archive-meta">#${pIdx + 1} · ${dateStr.toUpperCase()} · ${p.category.toUpperCase()}</div>
            <div class="archive-answer" style="color:${result ? p.aura : 'var(--dim)'}">
              ${result ? p.answer : `Aura #${pIdx + 1}`}
            </div>
          </div>
          <div class="archive-right">
            ${resultIcon}
            <button class="archive-play" onclick="startReplay(${daysAgo})" aria-label="Play Aura #${pIdx + 1}">
              ${result ? 'Replay ↗' : 'Play ↗'}
            </button>
          </div>
        </div>`;
    });

    html += `</div>`;
  });

  list.innerHTML = html;
  list.scrollTop = savedScroll;
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

