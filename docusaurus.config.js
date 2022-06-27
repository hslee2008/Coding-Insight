const algolia = {
  appId: 'R3K9KZ97RY',
  apiKey: '7ce7ed346b7a011ff4a2694a8f630488',
  indexName: 'crawler_Coding-Insight',
  indexPrefix: 'crawler_',
  rateLimit: 8,
  startUrls: ['https://www.coding-insight.com'],
  renderJavaScript: false,
  sitemaps: ['https://www.coding-insight.com/sitemap.xml'],
  ignoreCanonicalTo: true,
  discoveryPatterns: ['https://www.coding-insight.com/**'],
  actions: [
    {
      indexName: 'crawler_Coding-Insight',
      pathsToMatch: ['https://www.coding-insight.com/**'],
      recordExtractor: ({ $, helpers }) => {
        const lvl0 =
          $(
            '.menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active',
          )
            .last()
            .text() || 'Documentation';
        return helpers.docsearch({
          recordProps: {
            lvl0: {
              selectors: '',
              defaultValue: lvl0,
            },
            lvl1: ['header h1', 'article h1'],
            lvl2: 'article h2',
            lvl3: 'article h3',
            lvl4: 'article h4',
            lvl5: 'article h5, article td:first-child',
            lvl6: 'article h6',
            content: 'article p, article li, article td:last-child',
          },
          aggregateContent: true,
          recordVersion: 'v3',
        });
      },
    },
  ],
  initialIndexSettings: {
    'Coding-Insight': {
      attributesForFaceting: [
        'type',
        'lang',
        'language',
        'version',
        'docusaurus_tag',
      ],
      attributesToRetrieve: [
        'hierarchy',
        'content',
        'anchor',
        'url',
        'url_without_anchor',
        'type',
      ],
      attributesToHighlight: ['hierarchy', 'content'],
      attributesToSnippet: ['content:10'],
      camelCaseAttributes: ['hierarchy', 'content'],
      searchableAttributes: [
        'unordered(hierarchy.lvl0)',
        'unordered(hierarchy.lvl1)',
        'unordered(hierarchy.lvl2)',
        'unordered(hierarchy.lvl3)',
        'unordered(hierarchy.lvl4)',
        'unordered(hierarchy.lvl5)',
        'unordered(hierarchy.lvl6)',
        'content',
      ],
      distinct: true,
      attributeForDistinct: 'url',
      customRanking: [
        'desc(weight.pageRank)',
        'desc(weight.level)',
        'asc(weight.position)',
      ],
      ranking: [
        'words',
        'filters',
        'typo',
        'attribute',
        'proximity',
        'exact',
        'custom',
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: '</span>',
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: 'allOptional',
    },
  },
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
    dropdownItemsAfter: [
      {
        to: 'https://github.com/HyunseungLee-Travis/Coding-Insight/blob/main/CONTRIBUTING.md',
        label: 'Help us translate',
      },
    ],
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
      height: 400,
    },
    copyright: `Copyright © ${new Date().getFullYear()} Coding-Insight Team. Built with Docusaurus.`,
  },
  prism: {
    theme: require('prism-react-renderer/themes/github'),
    darkTheme: require('prism-react-renderer/themes/oceanicNext'),
    additionalLanguages: ['rust'],
  },
  metadata: [
    {
      name: 'keywords',
      content: 'programming, coding, coding-insight, python-factory',
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
      ],
      pwaHead: [
        {
          tagName: 'link',
          rel: 'icon',
          href: '/pwa/96x96.png',
        },
        {
          tagName: 'meta',
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
        {
          tagName: 'link',
          rel: 'apple-touch-icon',
          href: '/pwa/favicon-apple-touch-icon.png',
        },
        {
          tagName: 'meta',
          name: 'msapplication-TileImage',
          content: '/pwa/144x144.png',
        },
        {
          tagName: 'link',
          rel: 'manifest',
          href: '/pwa/manifest.json',
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
          href: '/pwa/256x256.png',
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
  [
    '@docusaurus/theme-search-algolia',
    {
      id: 'R3K9KZ97RY',
    },
  ],
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Coding-Insight',
  url: 'https://coding-insight.com',
  baseUrl: '/',

  favicon: 'img/favicon.ico',
  trailingSlash: false,
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
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/',
          sidebarCollapsible: true,
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.scss'),
            require.resolve('./src/css/github-header.scss'),
            require.resolve('./src/css/footer.scss'),
            require.resolve('./src/css/markdown.scss'),
          ],
        },
      }),
    ],
  ],
};

module.exports = config;
