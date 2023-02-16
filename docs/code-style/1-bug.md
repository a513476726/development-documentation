---
title: 问题记录
categories:
      - code-style
tags:
 - code-style
---

## 项目中的问题：

- 样式相关：

``` html

1.禁用行内样式（style="width:100px"）
<div class="product" style="width:100px"></div>

2.类名命名常用规则
  - 单词全部小写 中间以横线间隔开
  - 命名时要体现层级关系
<div class="product">
  <div class="product-content">
    <div class="product-content-list"> 
      <div class="product-list-item"></div>
      <div class="product-list-item"></div>
      <div class="product-list-item"></div>
    </div>
    ...other
  </div>
</div>

<style lang="scss/less" scoped>
  .product{
    &-content{
      &-list{
        &-item{

        }
      }
    }
  }
</style>

```

- 方法命名 & 常量命名

``` html

<script>
/**
*  常量 - 死值
*  1. 声明用const
*  2. 命名以大写加下划线方式命名
*  3. 一般这种变量的存放位置在 export default { } 上面
*/
const PRODUCT_CODE = '22PR852372'
const PRODUCT_CODE_LIST = {
  '22PR852372':'产品1',
  '22PR852373':'产品2',
  '22PR852374':'产品3',
}

/**
*  方法和普通变量
*  1. 小驼峰命名(首字母小写，后续每个单词首字母大写)
*/
data(){
  return {
    productList:null
  }
}

function getProductList(){
}

/**
*  1. const使用场景：object，array, function
*  2. let使用场景：string,number,boolean
*  3. var使用场景：禁用.
*  4. 不知道用什么声明 默认用const
*/

// info 不可变，info内key对应的值可以变
const info = {
  name:'张三',
  age:11,
}

// name，age，isGirl 可变 const 声明则都不可变
let name = '张三'
let age = 11
let isGirl = false


</script>
```

- 索赔管理后台

```javascript
// 发现的问题 
<script>
export default {
  components: {
    'dia-log': Dialog, // 问题命名不规范，组件需要两级命名
    'dialog-batch-import': DialogBatchImport // 不需要key：value 形式，
  }
}

// 优化 1
export default {
  components: {
    'home-dialog': Dialog,
    DialogBatchImport // 使用的时候 直接 dialog-batch-import 或者 DialogBatchImport
  }
}


// 推荐的使用方式
<template>
  <div>
    // 项目内的组件直接大写更容易识别。
    <HomeDialog />
  	<DialogBatchImport />
    // 依赖的组件 建议小写。
    <el-button>elementui</el-button>
  </div>
</template>
// 组件引用，推荐大驼峰方式命名
import HomeDialog from './Dialog.vue'  // Dialog.vue 命名应该一步到位  HomeDialog.vue
import DialogBatchImport from './DialogBatchImport.vue'

// 优化 2
export default {
  name:AppHome,
  components: {
    HomeDialog,
    DialogBatchImport
  }
}
</script>


// 发现的问题 2
<script>
// if 判断
if (this.fileContent) {
  if (fileType === 'xlsx' || fileType === 'xls') {

  } else {
    this.$message({
      type: 'warning',
      message: '附件格式错误，请重新上传！'
    })
  }
} else {
  this.$message({
    type: 'warning',
    message: '请上传附件！'
  })
}


// 优化
if (!this.fileContent) {
  this.$message({
    type: 'warning',
    message: '请上传附件！'
  })
  return
}

if (!(fileType === 'xlsx' || fileType === 'xls')) {
  this.$message({
    type: 'warning',
    message: '附件格式错误，请重新上传！'
  })
}
</script>

```

- 组件存放规范

```js
// 组件文件位置
// 组件命名规范：大驼峰命名， 首字母大写，每个单词首字母大写。

├── src // 源码
     ├── components // 公共组件 多个地方引用的组件，具备高度可复用的特点
     │    ├── AppButton.vue 
     │    └── AppTitle.vue
     └── view
          └── insuranceScheme  // 保险方案
               ├── components //此处放保险方案相关的组件，拆分的业务组件
               │    ├── ListTable.vue // 保险方案列表表格组件
               │    └── ListAddUser.vue // 保险方案列表，添加，员工组件。
               └── list.vue  // 保险方案列表
```

- 工具类js / 公共js

```js
// js 存放
├── src // 源码
     ├── utils // 所有不需要特殊分类的js 都推荐放到这里
     │    ├── common.js 
     │    └── date.js
     ├── router // 路由相关的js （特殊类举例）
     └── store  // 状态管理相关的js （特殊类举例）
```


- Vue计算属性

```js
// 尽量使用计算属性代替方法进行计算
<div v-for="item in [1,2,3]">
  {{ getListName(item) }}
</div>


export default {
  computed: {
    // 推荐
    getListName() {
      return (item)=>{
        return '我的名字是：'+ item
      }
    }
  },
  methods:{
    // 不推荐
    getListName(item){
      return '我的名字是：' + item
    },
  },
}

```

- 合并代码注意事项。

```js
// soucetree 默认填写的 说明不要删除自己写，可以体现冲突的地方，便于排查问题。

// 自动填写的内容示例
Merge branch 'develop' into develop_zzg_router_tag

# Conflicts:
#	src/views/caseClaimModule/common/draggable.vue
#	src/views/login/login.vue

```

