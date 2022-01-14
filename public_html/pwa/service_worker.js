const sCacheName = "python-factory-service-worker-pwa";
const aFilesToCache = [
  "./index.html",
  "./manifest.json",
  "./favicon.ico",
  "./global/style.css",
  "./component.js",
  "./index-en.html",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",
  "https://unpkg.com/vue@3.2.26/dist/vue.global.prod.js",
  "https://www.googletagmanager.com/gtag/js?id=UA-209775586-1"
];

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
