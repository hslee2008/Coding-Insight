const sCacheName = "python-factory-service-worker-pwa";
const aFilesToCache = ["./index.html", "./manifest.json"];

self.addEventListener("install", (pEvent) => {
  pEvent.waitUntil(
    caches.open(sCacheName).then((pCache) => {
      return pCache.addAll(aFilesToCache);
    })
  );
});

self.addEventListener("fetch", (pEvent) => {
  pEvent.respondWith(
    caches
      .match(pEvent.request)
      .then((response) => {
        if (!response) {
          return fetch(pEvent.request);
        }
        return response;
      })
      .catch((err) => console.log(err))
  );
});
