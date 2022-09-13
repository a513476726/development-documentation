# 快速开始

## 基础依赖

``` bash
# elementui。
yarn add element-ui@2.15.6  or  npm install element-ui@2.15.6

# 批量导入 导出组件，需要的依赖。
yarn add xlsx@0.13.5  or  npm install xlsx@0.13.5
yarn add xlsx-style@0.8.13  or  npm install xlsx-style@0.8.13

```

## 主依赖


``` bash
# 基于elementui
yarn add vue2-elementui-extend  or  npm install vue2-elementui-extend

```

## main.js 配置
``` javascript
import ElementUI from 'element-ui';
import ElEx from 'vue2-elementui-extend';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(ElEx);

```
