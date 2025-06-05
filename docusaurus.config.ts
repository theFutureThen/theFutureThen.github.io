import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: '未来志',
  tagline: '未来已来！让科技走进千家万户！',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://thefuturethen.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'theFutureThen', // Usually your GitHub org/user name.
  projectName: 'theFutureThen.github.io', // Usually your repo name.
  deploymentBranch: 'main',
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/theFutureThen/theFutureThen.github.io/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/theFutureThen/theFutureThen.github.io/tree/main',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '未来志',
      logo: {
        alt: 'Logo',
        src: 'img/logo.webp',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'demo',
        //   position: 'left',
        //   label: 'Demo',
        // },
        {
          type: 'docSidebar',
          sidebarId: 'tutorial',
          position: 'left',
          label: '小白教程',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'vps',
        //   position: 'left',
        //   label: 'VPS',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'wordpress',
        //   position: 'left',
        //   label: 'WordPress',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'vpn',
        //   position: 'left',
        //   label: 'VPN',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/theFutureThen',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()}.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
