const algolia = {
  appId: "R3K9KZ97RY",
  apiKey: "7ce7ed346b7a011ff4a2694a8f630488",
  indexName: "crawler_Coding-Insight",
  contextualSearch: true,
};

const navbarItems = [
  {
    to: "about",
    label: "About",
    position: "left",
    items: [
      {
        label: "코딩 인사이트에 대해",
        to: "about",
      },
      {
        label: "인트로 비디오",
        href: "https://www.youtube.com/watch?v=ya7Ud1tTpag",
      },
    ],
  },
  {
    to: "/docs/getting-started",
    label: "프로그래밍 언어",
    position: "left",
    items: [
      { to: "/docs/python/start/python", label: "파이썬" },
      { to: "/docs/c-cpp", label: "C/C++" },
      { to: "/docs/rust/start/rust", label: "Rust" },
    ],
  },
  {
    href: "https://github.com/HyunseungLee-Travis/Coding-Insight",
    "aria-label": "GitHub",
    position: "right",
    className: "header-github-link",
  },
  {
    type: "localeDropdown",
    position: "right",
    dropdownItemsAfter: [
      {
        href: "https://github.com/HyunseungLee-Travis/Coding-Insight/blob/main/CONTRIBUTING.md",
        label: "Help us Translate",
      },
    ],
  },
];

const footerLinks = [
  {
    title: "Docs",
    items: [
      {
        label: "파이썬",
        to: "/docs/python/start/python",
      },
      {
        label: "C/C++",
        to: "/docs/c-cpp",
      },
      {
        label: "Rust",
        to: "/docs/rust/start/rust",
      },
    ],
  },
  {
    title: "Community",
    items: [
      {
        label: "Contributors",
        href: "https://github.com/HyunseungLee-Travis/Coding-Insight/graphs/contributors",
      },
      {
        label: "Contributing",
        href: "https://github.com/HyunseungLee-Travis/Coding-Insight/blob/main/CONTRIBUTING.md",
      },
    ],
  },
  {
    title: "Links",
    items: [
      {
        label: "GitHub",
        href: "https://github.com/HyunseungLee-Travis/Coding-Insight",
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/channel/UChTUaMMkavu5hxIA7Gd4kfA",
      },
      {
        label: "VSCode Extension",
        href: "https://marketplace.visualstudio.com/items?itemName=HyunseungLee.python-factory-web-search",
      },
    ],
  },
];

const themeConfig = {
  algolia,
  image: "img/coding-insight.png",
  colorMode: {
    defaultMode: "dark",
    disableSwitch: false,
    respectPrefersColorScheme: true,
  },
  navbar: {
    hideOnScroll: false,
    title: "Coding-Insight",
    logo: {
      alt: "Coding-Insight Logo Logo",
      src: "img/favicon.png",
    },
    items: navbarItems,
  },
  footer: {
    style: "dark",
    links: footerLinks,
    logo: {
      alt: "Coding-Insgiht Logo",
      src: "img/favicon.png",
      href: "https://github.com/HyunseungLee-Travis/Coding-Insight",
      width: 50,
      height: 200,
    },
    copyright: `Copyright © ${new Date().getFullYear()} Coding-Insight, Team.`,
  },
  prism: {
    theme: require("prism-react-renderer/themes/github"),
    darkTheme: require("prism-react-renderer/themes/oceanicNext"),
    additionalLanguages: ["rust"],
  },
  metadata: [
    {
      name: "keywords",
      content: "programming, coding, coding-insight, python-factory",
    },
  ],
};

const plugins = [
  "docusaurus-plugin-sass",
  "@docusaurus/plugin-ideal-image",
  [
    "@docusaurus/plugin-pwa",
    {
      debug: true,
      offlineModeActivationStrategies: ["appInstalled", "queryString"],
      pwaHead: [
        {
          tagName: "link",
          rel: "icon",
          href: "/pwa/512x512.png",
        },
        {
          tagName: "link",
          rel: "manifest",
          href: "/pwa/manifest.json",
        },
        {
          tagName: "meta",
          name: "theme-color",
          content: "#242526",
        },
        {
          tagName: "meta",
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          tagName: "meta",
          name: "apple-mobile-web-app-status-bar-style",
          content: "#242526",
        },
        {
          tagName: "link",
          rel: "apple-touch-icon",
          href: "/pwa/favicon-apple-touch-icon.png",
        },
        {
          tagName: "link",
          rel: "mask-icon",
          href: "/pwa/512x512.png",
          color: "#06bcee",
        },
        {
          tagName: "meta",
          name: "msapplication-TileImage",
          href: "/pwa/512x512.png",
        },
        {
          tagName: "meta",
          name: "msapplication-dTileColor",
          content: "#242526",
        },
      ],
    },
  ],
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Coding-Insight",
  url: "https://coding-insight.com",
  baseUrl: "/",

  favicon: "img/favicon.ico",
  trailingSlash: false,
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en"],
  },
  noIndex: false,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  onDuplicateRoutes: "ignore",
  tagline: "Learn, Practice, Build and Deploy",
  organizationName: "HyunseungLee-Travis",
  projectName: "Coding-Insight",
  themeConfig,
  plugins,
  staticDirectories: ["static"],
  titleDelimiter: "|",

  baseUrlIssueBanner: true,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/HyunseungLee-Travis/Coding-Insight/tree/main/website/",
          sidebarCollapsible: true,
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.scss"),
            require.resolve("./src/css/github-header.scss"),
            require.resolve("./src/css/footer.scss"),
            require.resolve("./src/css/markdown.scss"),
            require.resolve("./src/css/edit.scss"),
          ],
        },
      }),
    ],
  ],
};

module.exports = config;
