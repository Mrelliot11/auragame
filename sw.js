const CACHE = 'aura-v3';
const SHELL = [
  './',
  './index.html',
  './style.css',
  './game.js',
  './puzzles.js',
  './images/favicon.svg',
  './images/icon-192.png',
  './images/icon-512.png',
  './manifest.json',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// ── PUSH NOTIFICATIONS ────────────────────────────────────────────────────────
self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  e.waitUntil(
    self.registration.showNotification(data.title || 'AURA', {
      body: data.body || "Today's aura is ready. Can you feel it?",
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      tag: 'aura-daily',
      renotify: true,
      data: { url: '/' },
    })
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(all => {
      const open = all.find(c => c.url.startsWith(self.registration.scope));
      if (open) return open.focus();
      return clients.openWindow('/');
    })
  );
});

self.addEventListener('fetch', e => {
  // Network-first for Google Fonts; cache-first for everything else
  if (e.request.url.includes('fonts.googleapis.com') || e.request.url.includes('fonts.gstatic.com')) {
    e.respondWith(
      fetch(e.request)
        .then(r => { const rc = r.clone(); caches.open(CACHE).then(c => c.put(e.request, rc)); return r; })
        .catch(() => caches.match(e.request))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
