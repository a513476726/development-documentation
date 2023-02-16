---
title: vue2升vue3指南
---

# vue2 升 vue3 过程及问题记录


## 项目介绍
- 旧项目：webpack + vuex + vue2 + elementui + sass + ......
- 新项目：vite + pinia + vue3 +elementplus + sass + ......

## 改造步骤
1. 准备好一个 vite + pinia + vue3 + element plus + sass  的框架项目（新项目）
2. 将vue2代码 进行批量升级 使用工具 gogocode （旧项目）
3. 将elementui 进行批量升级 使用工具 gogocode（旧项目）
4. 将旧项目代码进行转移到新项目， 建议一点点转移，（登录页 -> 请求代理配置 -> 主页 -> 每一个页面）。

## 改造点问题记录

### CommonJS 规范 改成 ESModule 规范
```js
/**
*  CommonJS 规范 改成 ESModule 规范
**/
return {
  imgUrlArr: [
    { url: require('@/assets/image/icon7.png'), value: '案件管理' },
  ]
}

import icon7 from '@/assets/image/icon7.png'

return {
  imgUrlArr: [
    { url: icon7, value: '案件管理' },
  ],
}


/**
* 自执行函数需要 改成 ESModule 规范
**/

// index.js
(function(str){
  console.log('输出的值：' + str)
}('我是自执行函数的参数'))

// index.js
export const outValue:function(str){
  console.log('输出的值：' + str)
}

import { outValue } from "./index.js"
outValue('我是自执行函数的参数')


```

### elementui => element plus 图标调整
```js
/**
*  elementui => element plus 图标调整
**/


<template>
  <el-icon>
    <el-icon-fold/>
  </el-icon>  
</template>

// 代码转换完 会变成 Fold as ElIconFold 的形式， 再根据 element plus文档 调整异常的图标部分即可
import {
  Fold as ElIconFold
} from '@element-plus/icons'

export default {
  components: {
    ElIconFold,
  },
}
```

###  vuex => pinia
```js

/**
*  vuex => pinia
**/

// router.js 改造前
const state = () => ({
  openTabs: [], //所有打开的路由
  activeRouter: 'homeRole', //激活状态
})

const getters = {
  getOpenTabs: (state) => state.openTabs,
}

const mutations = {
  setTabs: (state, array) => {
    state.openTabs.splice(0, state.openTabs.length, ...array)
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}


// router.js 改造后
export const useRouterStore = defineStore("router", {
  state:() => ({
    openTabs: [], //所有打开的路由
    activeRouter: 'homeRole', //激活状态
  })

  getters :{
    getOpenTabs: (state) => state.openTabs,
  }
  
  // mutations 与 actions 合并
  actions:{
    setTabs: (array) => {
      const openTabs = useRouterStore().openTabs;
      useRouterStore().openTabs.splice(0, openTabs.length, ...array)
    },
  }
})


// 非setup() 使用
import { useRouterStore } from '@/stores/router.js'
import { mapStores,mapState,mapActions} from 'pinia'
import { toRaw } from '@vue/reactivity'

export default {
  computed: {
    ...mapState(useRouterStore,{
       openTabs(store) {
         return toRaw(store.openTabs)
       }
    }),
  },
  mounted() {
		this.setTabs([1,2,3]); //传递一个数组
    this.openTabs; // 获取 state.openTabs
  },
  methods: {
    ...mapActions(useRouterStore,['setTabs'])
  },
}

```


### css /deep/ 深度作用选择
```js
/**
*  css /deep/ 深度作用选择
**/

/deep/ .list  => :deep(.list)

```


### element ui => element plus 主题设置
```js
/**
* element ui => element plus 主题设置
**/

// 旧：element-ui
/* element-variables.scss  改变主题色变量 */ 
$--color-primary: #36cfc9 !default;
$--color-info: #d0d0d0 !default;
$--color-warning: #e8bd1f !default;
$--color-danger: #E8663B !default;
@import "~element-ui/packages/theme-chalk/src/index";

/* main.js 文件引入 */ 
import './assets/element-variables.scss';


// 新：element-plus
/* element-variables.scss 改变主题色变量 */
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': #36cfc9,
    ),
    'info':(
      'base': #d0d0d0
    ),
    'warning':(
      'base': #e8bd1f
    ),
    'danger':(
      'base': #E8663B
    ),
  ),
);
@use "element-plus/theme-chalk/src/index.scss" as *;

/* main.js 文件引入 */ 
import './assets/element-variables.scss';
```


### 转换完成demo

- 项目：ind-claim-admin
- 分支：develop_vue3_demo
- gogocode转换后分支：develop_vue3
