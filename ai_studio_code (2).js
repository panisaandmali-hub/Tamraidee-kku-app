const CACHE_NAME = 'tamraidee-app-v1';

self.addEventListener('install', (e) => {
    console.log('Service Worker: Installed');
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    console.log('Service Worker: Activated');
});

// ฟังชั่นการดึงข้อมูล (Fetch) ให้ทำงานได้ไวขึ้น
self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});