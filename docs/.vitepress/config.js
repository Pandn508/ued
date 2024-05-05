import UnoCSS from '@unocss/vite'

module.exports = {
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  vite: {
    plugins: [
      UnoCSS()
    ]
  },
  themeConfig: {
    nav: [
      // { text: "指南", link: "/guild/installation.md" },
      { text: "组件", link: "/examples/installation" },
    ],
    // socialLinks: [{ icon: "github", link: "https://gitee.com/geeksdidi" }],
    sidebar: {
      "/examples/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/examples/installation",
            },
            {
              text: "规则汇总",
              link: "/examples/quickstart",
            },
          ],
        },
        {
          text: "样例",
          items: [
            {
              text: "color",
              link: "/examples/rules/color",
            },
            {
              text: "border",
              link: "/examples/rules/border",
            },
          ]
        }
      ]
    },
  },
}