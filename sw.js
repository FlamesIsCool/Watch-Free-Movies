// PrimeTime Service Worker — enables PWA install
const CACHE_NAME = 'primetime-v2';
const PRECACHE = [
  './index.html',
  './styles.css',
  './script.js',
  './favicon.svg',
  './auth.html',
  './profiles.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  // Network-first for API calls, cache-first for static assets
  if (e.request.url.includes('api.themoviedb.org') || e.request.url.includes('image.tmdb.org')) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetched = fetch(e.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return response;
      }).catch(() => cached);
      return cached || fetched;
    })
  );
});
