// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Groot Guide",
  tagline: "Guide for Groot bot",
  url: "https://guide.grootbot.pro",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Groot Guide",
        logo: {
          alt: "Groot logo",
          src: "https://grootbot.pro/img/groot.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Guide",
          },
          {
            label: "Links",
            items: [
              {
                label: "Discord",
                href: "https://grootbot.pro/support",
              },
              {
                label: "Twitter",
                href: "https://grootbot.pro/twitter",
              },
            ],
            position: "right",
          },
        ],
      },
      colorMode: {
        disableSwitch: true,
        defaultMode: "dark",
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Guides",
            items: [
              {
                label: "Dashboard",
                to: "/docs/category/tutorial---dashboard",
              },
              {
                label: "Bot",
                to: "/docs/category/tutorial---bot",
              },
            ],
          },
          {
            title: "Legal",
            items: [
              {
                label: "Terms of Service",
                href: "https://grootbot.pro/terms",
              },
              {
                label: "Privacy Policy",
                href: "https://grootbot.pro/privacy",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Groot. Proudly Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: "beware_of_scams",
        content:
          "Please use the official sources for anything related to the bot. We are not responsible in case of any scams.",
        backgroundColor: "#AFD2E9",
        textColor: "#091E42",
        isCloseable: false,
      },
    }),
};

module.exports = config;
