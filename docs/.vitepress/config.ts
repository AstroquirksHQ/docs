import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Astroquirks Docs",
  description: "Technical docs for Astroquirks",
  cleanUrls: true,
  base: process.env["CI"] === "1" ? "/docs/" : undefined,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "Airdrop guide",
        items: [
          { text: "Getting started", link: "/airdrop/getting-started" },
          {
            text: "Prepare temporary addresses",
            link: "/airdrop/prepare-addresses",
          },
          {
            text: "Withdraw commission",
            link: "/airdrop/withdraw-commission",
          },
          {
            text: "Provision temporary address",
            link: "/airdrop/send-to-tmp",
          },
          {
            text: "Swap to airdrop token",
            link: "/airdrop/swap",
          },
          {
            text: "Snapshot delegators",
            link: "/airdrop/snapshot-delegators",
          },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/AstroquirksHQ" }],
  },
});
