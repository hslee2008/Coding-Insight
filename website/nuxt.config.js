import colors from 'vuetify/es5/util/colors';

export default {
  target: 'static',
  generate: {
    dir: '../public_html/',
    devtools: true,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s  (Python-Factory)',
    title: 'Coding-Insight',
    meta: [
      {
        charset: 'UTF-8',
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
        content: '#20232a',
      },
      {
        name: 'keywords',
        content: [
          'python',
          'c',
          'c++',
          'rust',
          'programming',
          'coding',
          'coding-insight',
          'python-factory',
        ],
      },
      {
        name: 'author',
        content: ['Hyunseung', 'Juha', 'Gun'],
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Let us teach you about Python, C, C++, and Rust! It is very easy, just come into our site!',
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
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
    ],
  },

  css: ['./assets/css/global.css'],

  // https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // https://go.nuxtjs.dev/config-components
  components: true,

  // https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
    '@nuxt/image',
    '@nuxtjs/google-analytics',
  ],

  vue: {
    config: {
      devtools: true,
      performance: true,
      productionTip: true,
      errorHandler: (err, vm, info) => {
        console.error(`[Vue Error] ${err} ${info} - (found in ${vm})`);
      },
      warnHandler: (msg, vm, trace) => {
        console.warn(`[Vue Error] ${msg} ${trace} - (found in ${vm})`);
      },
    },
  },

  // https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  // https://go.nuxtjs.dev/config-axios
  axios: {
    // https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

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
      name: '파이썬 (Python-Factory)',
      short_name: '파이썬 (Python-Factory)',
      version: '2022.01.16',
      description: 'Learn Python in Coding-Insight',
      dir: 'rtl',
      id: '/index.html',
      author: ['Hyunseung', 'Juha', 'Gun'],
      categories: ['python', 'programming', 'coding-insight', 'python-factory'],
      theme_color: '#20232a',
      background_color: '#20232a',
      display: 'minimal-ui',
      scope: './',
      start_url: '/',
      prefer_related_applications: false,
      orientation: 'portrait',
      icons: [
        {
          src: '/favicon.ico',
          sizes: '256x256',
          purpose: 'any',
        },
        {
          src: '/favicon.ico',
          sizes: '192x192',
          purpose: 'any',
        },
        {
          src: './icon.png',
          sizes: '512x512',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      offlinePage: '/offline.html',
    },
  },

  router: {
    base: '/',
  },

  vuetify: {
    optionsPath: './assets/plugins/vuetify.setting.js',
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
  },

  server: {
    port: 8000,
    host: '0.0.0.0',
    timing: false,
  },

  //https://google-analytics.nuxtjs.org/setup
  googleAnalytics: {
    id: 'UA-160584932-1',
  },
};
