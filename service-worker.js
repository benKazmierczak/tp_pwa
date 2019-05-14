importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.core.skipWaiting();

    workbox.routing.registerRoute(new RegExp('.*\.js'), new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [] }), 'GET');
    //workbox.routing.registerRoute(new RegExp('.*\.js'), new workbox.strategies.NetworkFirst());


} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

