module.exports = {
  base:'/',
  title:'vue2-elementui-extend',
  description:'vue2-elementui-extend 是基于elementui 进行的二次封装。以数据驱动组件，统一风格，提高效率。',
  host:'0.0.0.0',
  port:'13800',
  cache:true,
  dest:'',
  head:[],
  themeConfig: {
    search: false,
    searchMaxSuggestions: 12,
    smoothScroll: true,
    lastUpdated: 'updated', // string | boolean
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/elementui-extend/' },
      { text: 'gitee源码', link: 'https://gitee.com/zhongzhiguo2020/vue2-elementui-extend'},
    ],
    sidebar: [
      {
        title: 'ElementUI组件扩展',   // 必要的
        path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/elementui-extend/quick-start.md','快速开始'],
          ['/elementui-extend/table.md','Table  表格'],
          ['/elementui-extend/filter-list.md','FilterList  表格筛选'],
          ['/elementui-extend/batch-import.md','BatchImport  批量导入'],
          ['/elementui-extend/file-export.md','FileExport  文件导出'],
        ]
      },
      {
        title: 'ElementUI例子',   // 必要的
        path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/elementui-extend/demo/form.md','Form'],
        ]
      },
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        'core-js/library/fn':'core-js/features',
        './cptable': 'var cptable' // xlsx-style
      }
    },
    node: {
      global: true,
      process: true
    },
  },
  markdown: {
    // lineNumbers: true // 显示代码行数
  },
  plugins: [
    // ['vuepress-plugin-code-copy', true],
    '@vuepress/back-to-top',
    'demo-container',
  ]
}