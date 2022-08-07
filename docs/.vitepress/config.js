module.exports = {
  title: '开发说明文档',
  description: '文档说明',
  lang: 'zh-CN',
  themeConfig: {
    // 展示搜索框
    algolia: {
      appKey: '',
      indexName: '',
      searchParameters: {
        faeFilters: ['tags:guide,api']
      }
    },
    nav: [
      {
        text: '主页',
        link: '/',
      },
      // {
      //   text: '组件',
      //   link: '/components/',
      // },

    ],
    // 添加侧边栏
    sidebar: 'auto',
    sidebarDepth: 2,
    sidebar: {
      '/': homeSidebar(),
    }
  },
  markdown: {
    config: (md) => {
      const {
        demoBlockPlugin
      } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    },
    lineNumbers: true
  }
}
function componentsSidebar() {
  return []
}
function homeSidebar() {
  return [
    {
      text: "快速开始",
      link: "/"
    },
    {
      text: "批量导入",
      children: [
        {
          text: "BatchImport 批量导入",
          link: "/components/batch-import/"
        },
      ],
    },
    {
      text: "列表筛选",
      children: [
        {
          text: "FilterList 列表筛选",
          link: "/components/filter-list/"
        },
      ],
    },
    {
      text: "列表组件",
      children: [
        {
          text: "Table 列表组件",
          link: "/components/table/"
        },
      ],
    },
  ]
}