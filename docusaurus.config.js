const algolia = {
  appId: 'R3K9KZ97RY',
  apiKey: '7ce7ed346b7a011ff4a2694a8f630488',
  indexName: 'crawler_Coding-Insight',
  contextualSearch: true,
};

const navbarItems = [
  {
    to: 'about',
    label: 'About',
    position: 'left',
    items: [
      {
        label: '코딩 인사이트에 대해',
        to: 'about',
      },
      {
        label: '인트로 비디오',
        href: 'https://www.youtube.com/watch?v=ya7Ud1tTpag',
      },
    ],
  },
  {
    label: '파이썬',
    to: '/docs/python/start/python',
  },
  {
    label: 'Rust',
    to: '/docs/rust/start/rust',
  },
  {
    href: 'https://github.com/HyunseungLee-Travis/Coding-Insight',
    'aria-label': 'GitHub',
    position: 'right',
    className: 'header-github-link',
  },
  {
    type: 'localeDropdown',
    position: 'right',
    dropdownItemsAfter: [
      {
        href: 'https://github.com/HyunseungLee-Travis/Coding-Insight/blob/main/CONTRIBUTING.md',
        label: 'Help us Translate',
      },
    ],
  },
  {
    type: 'search',
    position: 'right',
  },
];

const footerLinks = [
  {
    title: '튜토리얼',
    items: [
      {
        label: '파이썬',
        to: '/docs/python/start/python',
      },
      {
        label: 'Rust',
        to: '/docs/rust/start/rust',
      },
    ],
  },
  {
    title: '커뮤니티',
    items: [
      {
        label: '기여자들',
        href: 'https://github.com/HyunseungLee-Travis/Coding-Insight/graphs/contributors',
      },
      {
        label: '기여하기',
        href: 'https://github.com/HyunseungLee-Travis/Coding-Insight/blob/main/CONTRIBUTING.md',
      },
    ],
  },
  {
    title: '링크',
    items: [
      {
        label: '깃허브',
        href: 'https://github.com/HyunseungLee-Travis/Coding-Insight',
      },
      {
        label: '유튜브',
        href: 'https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA',
      },
      {
        label: '검색',
        href: '/search/',
      },
    ],
  },
];

const themeConfig = {
  algolia,
  image: 'img/coding-insight.png',
  colorMode: {
    defaultMode: 'dark',
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
  navbar: {
    hideOnScroll: false,
    title: 'Coding-Insight',
    logo: {
      alt: 'Coding-Insight Logo Logo',
      src: 'pwa/30x30.png',
      width: 30,
      height: 30,
    },
    items: navbarItems,
  },
  footer: {
    style: 'dark',
    links: footerLinks,
    logo: {
      alt: 'Coding-Insgiht Logo',
      src: '/pwa/50x54.png',
      href: 'https://github.com/HyunseungLee-Travis/Coding-Insight',
      width: 50,
      height: 54,
    },
    copyright: `Copyright © ${new Date().getFullYear()} Coding-Insight, Team.`,
  },
  prism: {
    theme: require('prism-react-renderer/themes/github'),
    darkTheme: require('prism-react-renderer/themes/oceanicNext'),
    additionalLanguages: ['rust', 'toml', 'powershell', 'bash'],
  },
  metadata: [
    {
      name: 'keywords',
      content: 'programming, coding, coding-insight, python-factory',
    },
    {
      name: 'description',
      content: 'Learn, Practice, Build and Deploy',
    },
    {
      name: 'author',
      content: 'Hyunseung Lee, Juha Im, Kim Gun',
    },
  ],
};

const plugins = [
  'docusaurus-plugin-sass',
  '@docusaurus/plugin-ideal-image',
  [
    '@docusaurus/plugin-pwa',
    {
      debug: process.env.NODE_ENV === 'development',
      offlineModeActivationStrategies: [
        'appInstalled',
        'standalone',
        'saveData',
        'queryString',
      ],
      pwaHead: [
        {
          tagName: 'link',
          rel: 'icon',
          href: '/pwa/512x512.png',
        },
        {
          tagName: 'link',
          rel: 'manifest',
          href: '/pwa/manifest.json',
        },
        {
          tagName: 'meta',
          name: 'theme-color',
          content: '#252426',
        },
        {
          tagName: 'meta',
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
        {
          tagName: 'meta',
          name: 'apple-mobile-web-app-status-bar-style',
          content: '#252426',
        },
        {
          tagName: 'link',
          rel: 'apple-touch-icon',
          href: '/pwa/favicon-apple-touch-icon.png',
        },
        {
          tagName: 'link',
          rel: 'mask-icon',
          href: '/pwa/512x512.png',
          color: '#06bcee',
        },
        {
          tagName: 'meta',
          name: 'msapplication-TileImage',
          href: '/pwa/512x512.png',
        },
        {
          tagName: 'meta',
          name: 'msapplication-dTileColor',
          content: '#252426',
        },
      ],
    },
  ],
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Coding-Insight',
  url: 'https://coding-insight.com',
  baseUrl: '/',

  favicon: 'img/favicon.ico',
  trailingSlash: true,
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
  },
  noIndex: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'ignore',
  tagline: 'Learn, Practice, Build and Deploy',
  organizationName: 'HyunseungLee-Travis',
  projectName: 'Coding-Insight',
  themeConfig,
  plugins,
  staticDirectories: ['static'],
  titleDelimiter: '|',
  baseUrlIssueBanner: true,

  presets: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-YVYVSKB94S',
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: '4142504402',
        anonymizeIP: true,
      },
    ],
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: './docs/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/',
          sidebarCollapsible: true,
          exclude: ['**/_*.{md,mdx}'],
          remarkPlugins: [require('mdx-mermaid')],
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.scss'),
            require.resolve('./src/css/quiz.scss'),
          ],
        },
      }),
    ],
  ],
};

module.exports = config;
