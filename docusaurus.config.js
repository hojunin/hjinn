// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HOJUNIN',
  tagline: 'HOJUNIN',
  url: 'https://www.hojunin.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://github.com/hojunin.png',
  organizationName: 'hojunin',
  projectName: 'hojunin',
  customFields: {
    password: process.env.PASSWORD,
  },
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  scripts: [
    {
      src: `
      (function (c, l, a, r, i, t, y) {
        c[a] =
          c[a] ||
          function () {
            (c[a].q = c[a].q || []).push(arguments);
          };
        t = l.createElement(r);
        t.async = 1;
        t.src = 'https://www.clarity.ms/tag/' + i;
        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
      })(window, document, 'clarity', 'script', 'kkp56cyvkt');
      `,
    },
  ],
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'uwCYoBoSwTC9uFmHW4NboXtooElpmJxhrxozRvx3l-w',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'naver-site-verification',
        content: 'b1ce78632311098322928fbebb74013086198e5c',
      },
    },
  ],
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // 옵션: 문서 플러그인 사용 여부
        blog: {
          routeBasePath: '/',
          blogSidebarTitle: '모든 포스트',
          blogSidebarCount: 'ALL',
          blogTitle: 'HJ 개발 블로그',
          postsPerPage: 5,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        },
        gtag: {
          trackingID: 'G-98C5STM243',
          anonymizeIP: true,
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
        title: 'HJ__INN',
        // logo: {
        //   alt: '메인 아이콘',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            to: '/books',
            label: '독서기록',
            position: 'left',
          },
          // {
          //   to: '/profess',
          //   label: '주간 정산',
          //   position: 'left',
          // },
          {
            href: 'https://hjinn.notion.site/hjinn/Full-Speed-Ahead-2d604da39fcd473d9328cf26877bb8cd',
            label: '내 소개',
            position: 'left',
          },
          {
            href: 'https://github.com/hojunin',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '더 알아보기',
            items: [
              {
                label: '이력서',
                href: 'https://hjinn.notion.site/hjinn/Full-Speed-Ahead-2d604da39fcd473d9328cf26877bb8cd',
              },
              {
                label: '브런치',
                href: 'https://brunch.co.kr/@dlsghwns',
              },
              {
                label: '깃허브',
                href: 'https://github.com/hojunin',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HOJUN IN`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
