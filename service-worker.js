// service-worker.js
const CACHE_NAME = 'app-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',         // Main HTML file
    '/styles.css',         // CSS file
    '/script.js',          // JavaScript file
    '/images/logo.png'     // Images or any other assets
];

// Install the service worker and cache resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Fetch the resources, serving from the cache or network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
