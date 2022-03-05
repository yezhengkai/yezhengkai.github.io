const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Insights Organizer',
  tagline: 'Record of important things',
  url: 'https://yezhengkai.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/iconfinder-icon.svg',
  organizationName: 'yezhengkai', // Usually your GitHub org/user name.
  projectName: 'yezhengkai.github.io', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
      zh: {
        label: '正體中文',
        direction: 'ltr',
        htmlLang: 'zh-TW',
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/yezhengkai/yezhengkai.github.io/edit/main/website/',
          showLastUpdateTime: true
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/yezhengkai/yezhengkai.github.io/edit/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Insights Organizer',
        logo: {
          alt: 'My Logo',
          src: 'img/iconfinder-icon.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'data-science/julia-infra-and-tool',
            position: 'left',
            label: 'Notes',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: "/blog/archive", label: "Blog Archive", position: "left" },
          
          { type: 'localeDropdown', position: 'right' },
          {
            href: 'https://github.com/yezhengkai',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Zheng-Kai Ye. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: "🌙",
          darkIconStyle: {
            marginLeft: "2px",
          },
          lightIcon: "☀️",
          lightIconStyle: {
            marginLeft: "1px",
          },
        },
      },
    }),
});
