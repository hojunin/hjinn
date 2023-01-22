// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HOJUNIN",
  tagline: "HOJUNIN",
  url: "https://www.hojunin.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://github.com/hojunin.png",
  organizationName: "hojunin",
  projectName: "hojunin",
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },
  headTags: [
    {
      tagName: "meta",
      attributes: {
        "google-site-verification":
          "uwCYoBoSwTC9uFmHW4NboXtooElpmJxhrxozRvx3l-w",
      },
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // 옵션: 문서 플러그인 사용 여부
        blog: {
          routeBasePath: "/",
          blogSidebarTitle: "모든 포스트",
          blogSidebarCount: "ALL",
          blogTitle: "HJ 개발 블로그",
          postsPerPage: 5,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        },
        gtag: {
          trackingID: "G-98C5STM243",
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "HJ__INN",
        // logo: {
        //   alt: '메인 아이콘',
        //   src: 'img/logo.svg',
        // },
        items: [
          { to: "/about", label: "내 소개", position: "left" },
          {
            href: "https://github.com/hojunin",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "더 알아보기",
            items: [
              {
                label: "이력서",
                href: "https://hjinn.notion.site/Full-Speed-Ahead-9b036ea279d04498ba907620e641c475",
              },
              {
                label: "브런치",
                href: "https://brunch.co.kr/@dlsghwns",
              },
              {
                label: "깃허브",
                href: "https://github.com/hojunin",
              },
              {
                label: "링크드인",
                href: "https://www.linkedin.com/in/hojunin/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HOJUN IN, Powered by Docusaurus`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
