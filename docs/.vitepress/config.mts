import { defineConfig, HeadConfig } from "vitepress";
import { sidebarSettings } from "./sidebar";
import mathjax3 from "markdown-it-mathjax3";

const customElements = ["mjx-container","mjx-assistive-mml"];

let headSettings: HeadConfig[] | undefined;

if (process.env.NODE_ENV === "production") {
  headSettings = [
    ["link", { rel: "icon", href: "/favicon.png", type: "image/png" }],
    [
      "script",
      {
        defer: "",
        src: "https://tenkubashi.angine.tech/ingress/b5fed886-87f3-4c2f-b61a-28e2f5820df2/script.js",
      },
    ],
    [
      "script",
      { type: "text/javascript" },
      `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ng8z2whajn");`,
    ],
  ];
} else {
  headSettings = [
    ["link", { rel: "icon", href: "/favicon.png", type: "image/png" }],
  ];
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "瓜兵速成指南",
  titleTemplate: "瓜兵速成指南",
  description:
    "瓜兵速成指南是一个简短的指南，主要分为录取入学篇、学习生活篇、学生社团篇、日常生活篇、学科竞赛篇、日常出行篇六部分，对大一新生入校第一年可能遇到的若干常见问题，并给出解答。",
  lang: "zh-CN",
  cleanUrls: true,
  head: headSettings,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/melon.svg",

    nav: [
      { text: "主页", link: "/" },
      { text: "修订说明", link: "/changelog" },
    ],

    sidebar: sidebarSettings(),

    socialLinks: [
      { icon: "github", link: "https://github.com/angine04/nwpu-manual" },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
});
