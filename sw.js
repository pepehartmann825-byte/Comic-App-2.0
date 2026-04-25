self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("comic-app").then(cache => {
      return cache.addAll(["./", "./index.html"]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});