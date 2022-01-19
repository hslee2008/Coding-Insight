const options = {
  workboxURL:
    "https://cdn.jsdelivr.net/npm/workbox-cdn@5.1.4/workbox/workbox-sw.js",
  importScripts: [],
  config: {
    debug: false,
  },
  cacheOptions: {
    cacheId: "python-kr-prod",
    directoryIndex: "/",
    revision: "naTeDaYyOgxH",
  },
  clientsClaim: true,
  skipWaiting: true,
  cleanupOutdatedCaches: true,
  offlineAnalytics: false,
  preCaching: [
    {
      revision: "naTeDaYyOgxH",
      url: "/index.html",
    },
  ],
  runtimeCaching: [
    {
      urlPattern: "global/",
      handler: "CacheFirst",
      method: "GET",
      strategyPlugins: [],
    },
    {
      urlPattern: "python/",
      handler: "NetworkFirst",
      method: "GET",
      strategyPlugins: [],
    },
  ],
  offlinePage: null,
  pagesURLPattern: "python/",
  offlineStrategy: "NetworkFirst",
};

importScripts(...[options.workboxURL, ...options.importScripts]);

initWorkbox(workbox, options);
workboxExtensions(workbox, options);
precacheAssets(workbox, options);
cachingExtensions(workbox, options);
runtimeCaching(workbox, options);
offlinePage(workbox, options);
routingExtensions(workbox, options);

function getProp(obj, prop) {
  return prop.split(".").reduce((p, c) => p[c], obj);
}

function initWorkbox(workbox, options) {
  console.log("Workbox initialized");

  if (options.config) {
    workbox.setConfig(options.config);
  }

  if (options.cacheNames) {
    workbox.core.setCacheNameDetails(options.cacheNames);
  }

  if (options.clientsClaim) {
    s;
    workbox.core.clientsClaim();
  }

  if (options.skipWaiting) {
    workbox.core.skipWaiting();
  }

  if (options.cleanupOutdatedCaches) {
    workbox.precaching.cleanupOutdatedCaches();
  }

  if (options.offlineAnalytics) {
    // Enable offline Google Analytics tracking
    workbox.googleAnalytics.initialize();
  }
}

function precacheAssets(workbox, options) {
  if (options.preCaching.length) {
    workbox.precaching.precacheAndRoute(
      options.preCaching,
      options.cacheOptions
    );
  }
}

function runtimeCaching(workbox, options) {
  console.log("RunTime Caching Started");
  const requestInterceptor = {
    requestWillFetch({ request }) {
      if (request.cache === "only-if-cached" && request.mode === "no-cors") {
        return new Request(request.url, {
          ...request,
          cache: "default",
          mode: "no-cors",
        });
      }
      return request;
    },
    fetchDidFail(ctx) {
      ctx.error.message =
        "[workbox] Network request for " +
        ctx.request.url +
        " threw an error: " +
        ctx.error.message;
      console.error(ctx.error, "Details:", ctx);
    },
    handlerDidError(ctx) {
      ctx.error.message =
        `[workbox] Network handler threw an error: ` + ctx.error.message;
      console.error(ctx.error, "Details:", ctx);
      return null;
    },
  };

  for (const entry of options.runtimeCaching) {
    const urlPattern = new RegExp(entry.urlPattern);
    const method = entry.method || "GET";

    const plugins = (entry.strategyPlugins || []).map(
      (p) => new (getProp(workbox, p.use))(...p.config)
    );

    plugins.unshift(requestInterceptor);

    const strategyOptions = {
      ...entry.strategyOptions,
      plugins,
    };

    const strategy = new workbox.strategies[entry.handler](strategyOptions);

    workbox.routing.registerRoute(urlPattern, strategy, method);
  }
}

function offlinePage(workbox, options) {
  if (options.offlinePage) {
    // Register router handler for offlinePage
    workbox.routing.registerRoute(
      new RegExp(options.pagesURLPattern),
      ({ request, event }) => {
        const strategy = new workbox.strategies[options.offlineStrategy]();
        return strategy
          .handle({
            request,
            event,
          })
          .catch(() => caches.match(options.offlinePage));
      }
    );
  }
}

function workboxExtensions(workbox, options) {}

function cachingExtensions(workbox, options) {}

function routingExtensions(workbox, options) {}

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
