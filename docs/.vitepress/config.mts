import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "瓜兵速成指南",
  titleTemplate: "瓜兵速成指南",
  description:
    "瓜兵速成指南是一个简短的指南，主要分为录取入学篇、学习生活篇、学生社团篇、日常生活篇、学科竞赛篇、日常出行篇六部分，对大一新生入校第一年可能遇到的若干常见问题，并给出解答。",
  lang: "zh-CN",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/melon.svg",

    nav: [
      { text: "主页", link: "/" },
      { text: "修订说明", link: "/changelog" },
    ],

    sidebar: [
      {
        items: [
          { text: "修订说明", link: "/changelog" },
          {
            text: "Q0：本篇指南内容涉及哪些方面？主要面向对象是谁？",
            link: "/foreword",
          },
        ],
      },
      {
        text: "录取入学篇",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
        collapsed: true,
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/angine04/nwpu-manual" },
    ],
  },
});
