const version = '1';
const cacheName = `mastermind-${version}`;

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/mastermind-game/',
        '/mastermind-game/index.html'
      ])
        .then(() => self.skipWaiting());
    })
  );  
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});



// // Delete outdated caches
// self.addEventListener('activate', function (event) {
//   event.waitUntil(
//     caches.keys().then(function (keyList) {
//       // `keyList` contains all cache names under your username.github.io
//       // filter out ones that has this app prefix to create white list
//       var cacheWhitelist = keyList.filter(function (key) {
//         return key.indexOf(APP_PREFIX)
//       })
//       // add current cache name to white list
//       cacheWhitelist.push(CACHE_NAME)

//       return Promise.all(keyList.map(function (key, i) {
//         if (cacheWhitelist.indexOf(key) === -1) {
//           console.log('deleting cache : ' + keyList[i] )
//           return caches.delete(keyList[i])
//         }
//       }))
//     })
//   )
// })