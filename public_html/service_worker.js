const sCacheName = "python-factory-service-worker-pwa";
const aFilesToCache = [
  "/index.html",
  "/manifest.json",
  "/global/favicon.ico",
  "/global/style.css",
  "/global/component.js",
  "/index-en.html",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
  "https://unpkg.com/vue@3.2.26/dist/vue.global.prod.js",
  "https://www.googletagmanager.com/gtag/js?id=UA-209775586-1",
];

self.addEventListener("install", (pEvent) => {
  console.log("👷 Installed");
  pEvent.waitUntil(
    caches.open(sCacheName).then((pCache) => {
      console.log("Cached...");
      return pCache.addAll(aFilesToCache);
    })
  );
});

self.addEventListener("activate", () => console.log("👷 started!"));

self.addEventListener("fetch", (pEvent) => {
  pEvent.respondWith(
    caches
      .match(pEvent.request)
      .then((response) => {
        if (!response) {
          console.log("Network Data Requested: ", pEvent.request);
          return fetch(pEvent.request);
        }
        console.log("Cache wants Data: ", pEvent.request);
        return response;
      })
      .catch((err) => console.log(err))
  );
});
