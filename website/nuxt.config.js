export default {
  target: 'static',
  generate: {
    dir: '../public_html/',
    devtools: true,
  },
  cache: {
    max: 10000,
    maxAge: 9000000,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en,ko-kr',
    },
    titleTemplate: '%s | Coding-Insight',
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

  css: [
    '~/assets/css/global.css',
    '~/assets/css/transition.css',
    '~/assets/css/media.css',
    '~/assets/css/scrollbar.css',
  ],

  // https://go.nuxtjs.dev/config-components
  components: true,

  // https://go.nuxtjs.dev/config-modules
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

  // https://go.nuxtjs.dev/config-modules
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

  loading: {
    color: 'skyblue',
    failedColor: 'red',
    height: '5px',
    continuous: true,
    throttle: 50,
    css: false,
  },
  loadingIndicator: {
    name: 'pulse',
    color: 'white',
    background: 'black',
  },

  //  https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Coding-Insight',
      short_name: 'Coding-Insight',
      version: '2022.02',
      description:
        'Learn programming through learning, practicing, and building. Our site includes full courses of python, c, c++, and rust for free in both Korean and English language.',
      dir: 'rtl',
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
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
      screenshots: [
        {
          src: '/pwa/screenshot-home.png',
          sizes: '1917x900',
          type: 'image/png',
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
              src: '/pwa/python.png',
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
              src: '/pwa/python.png',
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
              src: '/pwa/c cpp.png',
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
              src: '/pwa/rust.png',
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
    customVariables: ['~/assets/sass/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#149ECA',
          secondary: '#b0bec5',
          info: '#2196F3',
          accent: '#293540',
          success: '#4CAF50',
          warning: '#FFC107',
          error: '#b71c1c',
        },
        light: {
          primary: '#097EA5',
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    devtools: true,
    optmizeCSS: true,
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
    html: {
      minify: {
        collapseWhitespace: false,
        removeComments: true,
      },
    },
    extend(config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.performance = {
          maxEntrypointSize: 512000,
          maxAssetSize: 512000,
        };
      }
    },
  },
};
