
//Install  - triggerd by brouwser
self.addEventListener('install', function (event) {
    console.log('[Service Worker] Installing service worker . . .', event)
});

//Activate - triggerd by brouwser
self.addEventListener('activate', function (event) {
    console.log('[Service Worker, Activation SW...', event);
    return self.clients.claim();
});

//fetch  - triggerd by application
//Dit wordt intressant wanneer we het over chaching gaan hebbenb
self.addEventListener('fetch', function (event) {
    console.log('[Service Worker] Fetching something ....', event);
    event.respondWith(fetch(event.request));
});