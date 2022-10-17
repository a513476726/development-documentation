---
title: 快速开始
categories:
      - elementui-extend
tags:
 - elementui-extend
---
### 组件介绍
通过将Element-UI和其他已开发功能，进行封装，以数据驱动组件UI和功能，达到高效快速的完成日常工作。


### element-ui 安装

``` bash
# element-ui。
yarn add element-ui@2.15.6
npm install element-ui@2.15.6
```

### vue2-elementui-extend 安装

``` bash
# vue2-elementui-extend 基于 element-ui 进行的功能扩展
yarn add vue2-elementui-extend
npm install vue2-elementui-extend

```

### main.js 配置
``` javascript
import ElementUI from 'element-ui';
import ElEx from 'vue2-elementui-extend';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(ElEx);

```
