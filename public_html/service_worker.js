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
  pEvent.waitUntil(
    caches.open(sCacheName).then((pCache) => {
      return pCache.addAll(aFilesToCache);
    })
  );
});

addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
          .then(function (res) {
            return caches.open(CACHE_DYNAMIC_NAME).then(function (cache) {
              cache.put(event.request.url, res.clone());
              return res;
            });
          })
          .catch(function (err) {
            return caches
              .open(CACHE_CONTAINING_ERROR_MESSAGES)
              .then(function (cache) {
                return cache.match("./index.html");
              });
          });
      }
    })
  );
});

if (typeof window !== "undefined") {
  let deferredPrompt;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallPromotion();
  });

  buttonInstall.addEventListener("click", async () => {
    hideInstallPromotion();
    deferredPrompt.prompt();
    deferredPrompt = null;
  });

  window.addEventListener("appinstalled", () => {
    hideInstallPromotion();
    deferredPrompt = null;
  });
}
