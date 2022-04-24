export default {
  hooks: {
    'generate:done': () => {
      console.log(`https://hpanel.hostinger.com/hosting/coding-insight.com/`);
    },
  },
  build: {
    // analyze: true,

    devtools: true,
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
    indicator: true,
    optmizeCSS: true,
  },
  cli: {
    badgeMessages: ['🔥 Coding-Insight Website Firing Up 🔥'],
    bannerColor: 'blue',
  },
  css: [
    'assets/css/component.css',
    'assets/css/scrollbar.css',
    'assets/css/theme.css',
    'assets/css/transition.css',
  ],
  components: true,

  target: 'static',
  generate: {
    dir: '../public_html/',
    devtools: true,
  },
  cache: {
    max: 10000,
    maxAge: 9000000,
  },
  head: {
    htmlAttrs: {
      lang: 'en,ko-kr',
    },
    titleTemplate: '%s — Coding Insight',
    title: 'Coding-Insight',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        http_equiv: 'X-UA-Compatible',
        content: 'IE=edge',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0',
      },
      {
        name: 'theme-color',
        content: '#23272F',
      },
      {
        name: 'keywords',
        content: [
          'python',
          'c',
          'c++',
          '파이썬',
          'programming',
          '프로그래밍',
          'coding',
          'coding-insight',
          'python-factory',
        ],
      },
      {
        hid: 'Coding-Insight',
        name: 'description',
        content:
          'Learn programming through learning, practicing, and building. Our site includes full courses of python, c, c++, and rust for free in both Korean and English language.',
      },
      {
        name: 'author',
        content: ['Hyunseung', 'Juha', 'Gun'],
      },
      {
        name: 'copyright',
        content: 'Coding-Insight',
      },
      {
        name: 'subtitle',
        content: 'Learning Programming, Coding, Ethical Hacking',
      },
      {
        name: 'subject',
        content: 'Programming, Coding, Ethical Hacking',
      },
      {
        name: 'language',
        content: 'ES, KO-KR',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicon.ico',
      },
    ],
  },

  buildModules: ['@nuxtjs/vuetify'],

  vue: {
    config: {
      devtools: true,
      performance: true,
      productionTip: true,
    },
  },

  axios: {
    baseUrl: '/',
  },

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/axios',
  ],

  sitemap: {
    hostname: 'https://www.coding-insight.com',
    gzip: true,
    exclude: ['/.nuxt', '/404', '/500'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
  },

  robots: [
    {
      UserAgent: '*',
      Allow: '/',
      Sitemap: 'https://www.coding-insight.com/sitemap.xml',
    },
    {
      userAgent: 'Googlebot-image',
      Disallow: '/',
    },
  ],

  plugins: ['~/plugins/variable'],

  loading: {
    color: '#097FA4',
    failedColor: 'red',
    height: '2px',
    continuous: true,
    throttle: 0,
  },
  loadingIndicator: {
    name: 'pulse',
    color: 'white',
    background: 'black',
  },

  pwa: {
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {
            cacheName: 'google-fonts-webfonts',
            cacheExpiration: {
              maxEntries: 60,
              maxAgeSeconds: 60 * 60 * 24 * 365,
            },
          },
        },
        {
          urlPattern: 'https://fonts.gstatic.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: {
            cacheName: 'google-fonts-webfonts',
            cacheExpiration: {
              maxEntries: 60,
              maxAgeSeconds: 60 * 60 * 24 * 365,
            },
          },
        },
      ],
    },
    meta: {
      appleStatusBarStyle: 'black-translucent',
      favicon: '/favicon.ico',
    },
    manifest: {
      name: 'Coding-Insight',
      short_name: 'Coding-Insight',
      version: '2022.02',
      description:
        'Learn programming through learning, practicing, and building. Our site includes full courses of python, c, c++, and rust for free in both Korean and English language.',
      dir: 'ltr',
      id: '/index.html',
      author: ['Hyunseung', 'Juha', 'Gun'],
      categories: [
        'python',
        'c',
        'c++',
        'rust',
        'programming',
        'coding-insight',
        'python-factory',
      ],
      theme_color: '#23272F',
      background_color: '#23272F',
      display: 'fullscreen',
      scope: '/',
      start_url: '/',
      prefer_related_applications: false,
      related_applications: [
        {
          platform: 'webapp',
          url: 'https://www.coding-insight.com',
          id: 'com.Coding-Insight.app',
        },
      ],
      orientation: 'portrait',
      icons: [
        {
          src: '/pwa/256x256.png',
          sizes: '256x256',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/pwa/192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/icon.png',
          sizes: '514x512',
          type: 'image/png',
        },
      ],
      screenshots: [
        {
          src: '/pwa/screenshot/screenshot-home.png',
          sizes: '1920x897',
          type: 'image/png',
          platform: 'wide',
          label: 'Desktop Homescreen of Coding-Insight',
        },
        {
          src: '/pwa/screenshot/screenshot-mobile.png',
          sizes: '1002x1258',
          type: 'image/png',
          platform: 'narrow',
          label: 'Mobile Homescreen of Coding-Insight',
        },
      ],
      shortcuts: [
        {
          name: '파이썬',
          short_name: '파이썬',
          url: '/korean/python',
          description: '파이썬 프로그래밍 언어 배우기',
          icons: [
            {
              src: '/pwa/icons/python.png',
              sizes: '514x512',
              type: 'image/png',
              purpose: 'any',
            },
          ],
        },
        {
          name: 'Python',
          short_name: 'Python',
          url: '/english/python',
          description: 'Learn Python Programming Language',
          icons: [
            {
              src: '/pwa/icons/python.png',
              type: 'image/png',
              purpose: 'any',
            },
          ],
        },
        {
          name: 'C/C++',
          short_name: 'C/C++',
          url: '/korean/c-cpp',
          description: 'Learn C/C++ Programming Language',
          icons: [
            {
              src: '/pwa/icons/c cpp.png',
              type: 'image/png',
              purpose: 'any',
            },
          ],
        },
        {
          name: 'Rust',
          short_name: 'Rust',
          url: '/korean/rust',
          description: 'Rust 프로그래밍 언어 배우기',
          icons: [
            {
              src: '/pwa/icons/rust.png',
              type: 'image/png',
              purpose: 'any',
            },
          ],
        },
      ],
    },
  },

  router: {
    base: '/',
  },

  vuetify: {
    customVariables: ['assets/sass/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#097FA4',
          secondary: '#b0bec5',
          info: '#2196F3',
          accent: '#293540',
          success: '#4CAF50',
          warning: '#FFC107',
          error: '#b71c1c',
        },
        light: {
          primary: '#149ECA',
          secondary: '#b0bec5',
          info: '#2196F3',
          accent: '#E6F7FF',
          success: '#4CAF50',
          warning: '#FFC107',
          error: '#b71c1c',
        },
      },
    },
    treeShake: true,
  },
};
