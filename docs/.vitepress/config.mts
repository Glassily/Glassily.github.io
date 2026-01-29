import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Glassily's Website",
  description: "A VitePress Site",

  head: [
    // 添加全局CSS样式
    ['style', {}, `
      img.rounded {
        border-radius: 50%;
        object-fit: cover;
        width: 80px;
        height: 80px;
      }
    `]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //logo: '/vitepress-logo-large.svg',
    logo: '/avatar.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
