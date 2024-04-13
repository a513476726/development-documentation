const { getChildren } = require("./vuepress-sidebar-auto.js")
module.exports = {
  base:'/',
  title:'前端文档',
  keywords:'',
  description:'针对日常使用的公共组件进行封装和文档说明，便于多项目使用，可供不同开发人员针对相似需求，快速开展工作，减少沟通成本。',
  host:'0.0.0.0',
  port:'13800',
  cache:true,
  dest:'',
  head:[
    [
      'link', { rel: 'icon', href: './favicon.ico' }
    ],
    [ 'meta', { name:"keywords",content:"vue2-elementui-extend,el-ex,el-ex-table,el-ex-filter-list,el-ex-batch-import,el-ex-file-export,前端文档,批量导入,批量导出,elementui二次封装"}],
    [ 'meta', { name:"baidu-site-verification",content:"code-RxfGvV81LP" }],
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
      { text: '代码风格指南', link: '/code-style/' },
      { text: '组件', link: '/elementui-extend/' },
      { text: '服务端渲染', link: '/nuxt-ssr/' },
      { text: 'vue2升vue3指南', link: '/vue2-to-vue3/1-step'},
      { text: '后端开发',
        items: [
          { text: 'sql语句', link:'/sql/'},
          // { text: '其他', link:'/sql/'},
        ]
      },
      { text: '其他',
        items: [
          { text: '开发工具', link:'/tools/'},
          { text: '后端架构介绍', link: '/jiangtai/'},
          { text: '菜单标签', link: '/tab-menu/1-main' }
          // { text: '文档源码', link:'https://github.com/a513476726/development-documentation/tree/main'}
          // { text: 'vue2-elementui-extend源码', link: 'https://gitee.com/zhongzhiguo2020/vue2-elementui-extend'}
        ]
      },
    ],
    sidebar:{
      '/elementui-extend/': [
        // '1-quick-start.md','batch-import.md','file-export.md'
          {
              title: '组件',
              collapsable: false,//来让一个组永远都是展开状态
              sidebarDepth: 2,
              children: getChildren('./docs','elementui-extend')
          }
      ],
      '/nuxt-ssr/': [
        {
            title: '服务端渲染',
            collapsable: false,//来让一个组永远都是展开状态
            sidebarDepth: 2,
            children: getChildren('./docs','nuxt-ssr')
        }
      ],
      '/code-style/': [
        {
            title: '代码风格指南',
            collapsable: false,//来让一个组永远都是展开状态
            sidebarDepth: 2,
            children: getChildren('./docs','code-style')
        }
      ],
      '/jiangtai/': [
        {
            title: '后端架构介绍',
            collapsable: false,//来让一个组永远都是展开状态
            sidebarDepth: 2,
            children: getChildren('./docs','jiangtai')
        }
      ],
      '/vue2-to-vue3/': [
        {
            title: 'vue2升vue3指南',
            collapsable: false,//来让一个组永远都是展开状态
            sidebarDepth: 2,
            children: getChildren('./docs','vue2-to-vue3')
        }
      ],
      '/tab-menu/': [
        {
            title: '菜单标签',
            collapsable: false,//来让一个组永远都是展开状态
            sidebarDepth: 2,
            children: getChildren('./docs','tab-menu')
        }
      ],
      '/tools/': [{
        title: '开发工具',
        collapsable: false,//来让一个组永远都是展开状态
        sidebarDepth: 2,
        children: getChildren('./docs','tools')
      }],
      '/': [''] //不能放在数组第一个，否则会导致右侧栏无法使用
    },
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
    extractHeaders: ['h2', 'h3', 'h4', 'h5' ],
    externalLinks:true,
    // lineNumbers: true // 显示代码行数
  },
  plugins: [
    // ['vuepress-plugin-code-copy', true],
    '@vuepress/back-to-top',
    'demo-container',
    'vuepress-plugin-table-of-contents',
    [
      '@vuepress/active-header-links',
      {
        // 页面滚动时自动激活侧边栏链接的插件配置
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor',
      },
    ],
  ]
}