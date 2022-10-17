---
title: FileExport Excel导出(双层标题)
categories:
      - elementui-extend
tags:
 - elementui-extend
---

### 快速导航
<TOC />

### 实例展示

:::demo 双层标题数据导出

```vue
<template>
 <div>
    <ElExFileExport
      class="button"
      :tableData="multilineTableData"
      :fileName="'多行标题统计数据'"
      :titleBackground="'ff4d4d'"
      :fontColor="'cdffe0'"
      :buttonText="'多行导出'"
      :test="true"
    />
 </div>
</template>
<script>
export default {
  name:'ElExFileExportDemo2',
  data(){
    return {
      multilineTableData:{
        "thead":[
          [
            {
                "title":""
            },
            {
                "title":""
            },
            {
                "title":""
            },
            {
                "title":"报案数据",
                "colspan":3
            },
            {
                "title":"立案数据",
                "colspan":2
            },
            {
                "title":"结案数据",
                "colspan":2
            }
          ],
          [
            {
                "title":"区域"
            },
            {
                "title":"承保公司"
            },
            {
                "title":"事故类型"
            },
            {
                "title":"报案数（件）"
            },
            {
                "title":"人伤数量（人）"
            },
            {
                "title":"财产损失（元）"
            },
            {
                "title":"立案数（件）"
            },
            {
                "title":"估损金额（元）"
            },
            {
                "title":"结案数（件）"
            },
            {
                "title":"赔付金额（元）"
            }
          ]
        ],
        "tbody":[
          [
            "北京市",
            "诚泰财产保险股份有限公司云南分公司",
            "食物中毒",
            "2",
            "45",
            "5500",
            "2",
            "16846",
            "0",
            "0"
          ]
        ]
      },
    }
  }
}
</script>
```
:::


### ElExFileExport Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| tableData   | 导出数据，想要实现导出数据，需要根据示例的数据结构把自己的数据整理成此结构。 | string      |                    —    |  — |     —
| fileName   | 导出文件名称 | string      |                  —                |  — |
| titleBackground   | 导出标题背景颜色 | string      |                  —                |  — |
| fontColor   | 导出标题字体颜色 | string      |                  —                |  — |
| buttonText   | 按钮文案 | string      |                  —                |  — |
| test   | 调试数据模式 | Boolean      |                  —                |  — |