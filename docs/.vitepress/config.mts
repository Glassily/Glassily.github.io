import { defineConfig } from 'vitepress'
import { generateSidebar } from "vitepress-sidebar"


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Glassily's Website",
  description: "A VitePress Site",
  base: "/",
  markdown: {
    math: true
  },
  vite: {
    build: {
      // 将警告阈值提高
      chunkSizeWarningLimit: 2000
    }
  },
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search'
          },
          modal: {
            noResultsText: 'No results found',
            resetButtonTitle: 'Clear search',
            footer: {
              selectText: 'Select',
              navigateText: 'Navigate',
              closeText: 'Close'
            }
          }
        }
      }
    },

    // 配置导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: 'examples/markdown-examples' }
    ],

    // 配置侧边栏
    sidebar: generateSidebar({
      // 侧边栏的根目录，默认为docs
      documentRootPath: "/docs",
      // 使用h1的标题作为侧边栏的标题
      useTitleFromFileHeading: true,
      // 使用文件夹的index.md
      useFolderTitleFromIndexFile: true,
      // 指向文件夹的链接
      useFolderLinkFromIndexFile: true,
      // 根据md文件的order进行排序
      sortMenusByFrontmatterOrder: true,
      // 排序之后将不是文件夹的放后面
      sortFolderTo: "top",
      // 菜单展开功能
      collapsed: true,
    }),

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/examples/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/examples/api-examples' }
    //     ]
    //   },
    //         {
    //     text: 'Examples1',
    //     items: [
    //       { text: 'Markdown Examples', link: '/examples/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/examples/api-examples' }
    //     ]
    //   }
    // ],

    // 右侧大纲配置
    outline: {
      label: '页面导航',
      level: [2, 3],
    },

    // 配置社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/glassily' }
    ],

    // 配置页脚
    footer: {
      copyright: 'Copyright © 2026 Glassily'
    }
  }
})
