// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

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
    label: '가이드',
    to: '/docs/guides',
  },
  {
    to: '/docs/getting-started',
    label: '프로그래밍 언어',
    position: 'left',
    items: [
      { to: '/docs/python/start/python', label: '파이썬' },
      { to: '/docs/c-cpp', label: 'C/C++' },
      { to: '/docs/rust/start/rust', label: 'Rust' },
    ],
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
  },
];

const footerLinks = [
  {
    title: 'Docs',
    items: [
      {
        label: '파이썬',
        to: '/docs/python/start/python',
      },
      {
        label: 'C/C++',
        to: '/docs/c-cpp',
      },
      {
        label: 'Rust',
        to: '/docs/rust/start/rust',
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        label: 'Contributors',
        href: 'https://github.com/HyunseungLee-Travis/Coding-Insight/graphs/contributors',
      },
      {
        label: 'Contributing',
        href: 'https://github.com/HyunseungLee-Travis/Coding-Insight/blob/main/CONTRIBUTING.md',
      },
    ],
  },
  {
    title: 'Links',
    items: [
      {
        label: 'GitHub',
        href: 'https://github.com/HyunseungLee-Travis/Coding-Insight',
      },
      {
        label: 'YouTube',
        href: 'https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA',
      },
      {
        label: 'VSCode Extension',
        href: 'https://marketplace.visualstudio.com/items?itemName=HyunseungLee.python-factory-web-search',
      },
    ],
  },
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Coding-Insight',
  tagline: 'Learn, Practice, Build and Deploy',
  projectName: 'coding-insight',
  titleDelimiter: '|',

  url: 'https://coding-insight.com',
  baseUrl: '/beta/',
  baseUrlIssueBanner: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/beta/',
          sidebarCollapsible: true,
          breadcrumbs: false,
        },
        theme: {
          customCss: [
            require.resolve( './src/css/custom.scss' ),
            require.resolve( './src/css/github-header.scss' ),
            require.resolve( './src/css/footer.scss' ),
            require.resolve( './src/css/markdown.scss' ),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
          src: 'img/favicon.png',
        },
        items: navbarItems,
      },
      footer: {
        style: 'dark',
        links: footerLinks,
        logo: {
          alt: 'Coding-Insgiht Logo',
          src: 'img/favicon.png',
          href: 'https://github.com/HyunseungLee-Travis/Coding-Insight',
          width: 100,
          height: 600,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Coding-Insight`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust'],
      },
    }),
  plugins: [
    'docusaurus-plugin-sass',
    [
      '@docusaurus/plugin-pwa',
      {
        // @ts-ignore
        debug: process.env.NODE_ENV === 'development',
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'saveData',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/beta/pwa/96x96.png',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/beta/pwa/favicon-apple-touch-icon.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/beta/pwa/144x144.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/beta/pwa/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#0F0F0F',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#0F0F0F',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/beta/pwa/256x256.png',
            color: '#0F0F0F',
          },
          {
            tagName: 'meta',
            name: 'msapplication-dTileColor',
            content: '#0F0F0F',
          },
        ],
      },
    ],
    ['@docusaurus/plugin-ideal-image', {}],
  ],
};

module.exports = config;
