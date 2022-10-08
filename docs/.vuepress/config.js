module.exports = {
  base:'/',
  title:'食安保前端文档',
  description:'针对日常使用的公共组件进行封装和文档说明，便于多项目使用，可供不同开发人员针对相似需求，快速开展工作，减少沟通成本。',
  host:'0.0.0.0',
  port:'13800',
  cache:true,
  dest:'',
  head:[
    [
      'script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?0810337a927700effc7a074bf12c634a";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
      </script>
      `
    ]
  ],
  themeConfig: {
    search: false,
    searchMaxSuggestions: 12,
    smoothScroll: true,
    lastUpdated: 'updated', // string | boolean
    nav: [
      { text: '主页', link: '/' },
      { text: '组件', link: '/elementui-extend/' },
      { text: '服务端渲染', link: '/nuxt-ssr/' },
      { text: '代码风格指南', link: '/code-style/' },
      { text: '江泰中台', link: '/jiangtai/' },
      { text: 'gitee源码', link: 'https://gitee.com/zhongzhiguo2020/vue2-elementui-extend'}
    ],
    sidebar: [
      {
        title: 'vue2-elementui-extend',   // 必要的
        path: '',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/elementui-extend/quick-start.md','快速开始'],
          ['/elementui-extend/table.md','Table  表格'],
          ['/elementui-extend/filter-list.md','FilterList  表格筛选'],
          ['/elementui-extend/batch-import.md','BatchImport  批量导入'],
          ['/elementui-extend/file-export.md','FileExport  文件导出'],
          ['/elementui-extend/file-export2.md','FileExport  文件导出2'],
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
      }
    },
    externals:{
      './cptable': 'var cptable'
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