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
  console.log("서비스워커 설치함!");
  pEvent.waitUntil(
    caches.open(sCacheName).then((pCache) => {
      console.log("파일을 캐시에 저장함!");
      return pCache.addAll(aFilesToCache);
    })
  );
});

self.addEventListener("activate", (pEvent) => {
  console.log("서비스워커 동작 시작됨!");
});

self.addEventListener("fetch", (pEvent) => {
  pEvent.respondWith(
    caches
      .match(pEvent.request)
      .then((response) => {
        if (!response) {
          console.log("네트워크에서 데이터 요청!", pEvent.request);
          return fetch(pEvent.request);
        }
        console.log("캐시에서 데이터 요청!", pEvent.request);
        return response;
      })
      .catch((err) => console.log(err))
  );
});
