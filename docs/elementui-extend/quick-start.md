# 快速开始

### element-ui 安装

``` bash
# element-ui。
yarn add element-ui@2.15.6  or  npm install element-ui@2.15.6
```

### vue2-elementui-extend 安装

``` bash
# vue2-elementui-extend 基于 element-ui 进行的功能扩展
yarn add vue2-elementui-extend  or  npm install vue2-elementui-extend

```

### main.js 配置
``` javascript
import ElementUI from 'element-ui';
import ElEx from 'vue2-elementui-extend';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(ElEx);

```
