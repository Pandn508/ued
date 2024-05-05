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
      { text: "指南", link: "/guild/installation.md" },
      { text: "组件", link: "/examples/rules/color" },
    ],
    // socialLinks: [{ icon: "github", link: "https://gitee.com/geeksdidi" }],
    sidebar: {
      "/guild/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guild/installation",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart",
            },
          ],
        },
        // {
        //   text: "进阶",
        //   items: [
        //     {
        //       text: "xx",
        //       link: "/xx",
        //     },
        //   ],
        // },
      ],
      "/examples/": [
        // {
        //   text: "基础组件",
        //   items: [
        //     {
        //       text: "Button按钮",
        //       link: "/examples/button/",
        //     },
        //     {
        //       text: "Icon图标",
        //       link: "/examples/Icon/",
        //     },
        //   ],
        // },
        {
          text: "规则",
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