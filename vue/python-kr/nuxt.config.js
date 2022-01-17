import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s (Python-Factory)',
    title: '파이썬',
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
    script: [
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-209775586-1',
        async: true,
      },
      {
        src: 'global.js',
      },
    ],
  },

  css: ['./assets/css/global.css'],

  // https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // https://go.nuxtjs.dev/config-components
  components: true,

  // https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],

  // https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],

  // https://go.nuxtjs.dev/config-axios
  axios: {
    // https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
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
      start_url: '/index.html',
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
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
