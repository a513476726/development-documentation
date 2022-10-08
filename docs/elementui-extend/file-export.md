# el-ex-file-export excel导出 


### 基础导出数据
:::demo 基础导出数据

```vue
<template>
 <div>
    <ElExFileExport
      class="button"
      :tableData="tableData"
      :fileName="'单行标题统计数据'"
      :test="true"
    />
 </div>
</template>
<script>
export default {
  data(){
    return {
      tableData:{
        "thead":[
          [
            {
                "title":"区域"
            },
            {
                "title":"承保公司"
            },
            {
                "title":"企业类型"
            },
            {
                "title":"投保企业数（家）"
            },
            {
                "title":"保单件数（件）"
            },
            {
                "title":"保费规模（万元）"
            },
            {
                "title":"承保金额（万元）"
            }
          ]
        ],
        "tbody":[
          [
            "北京市市辖区",
            "中国平安财产保险股份有限公司广东分公司",
            "食品生产企业/粮食加工品",
            1,
            2,
            "0.91",
            "9.07"
          ],
          [
            "北京市市辖区",
            "中国人民财产保险股份有限公司北京市分公司",
            "食品生产企业/粮食加工品",
            1,
            1,
            "0.09",
            "23.46"
          ],
          [
            "北京市市辖区",
            "诚泰财产保险股份有限公司云南分公司",
            "食品生产企业/粮食加工品",
            1,
            1,
            "500.00",
            "20.00"
          ]
        ]
      }
    }
  },
}
</script>
```
:::

::: tip 注意事项!
  cptable 报错时需要在 webpack 配置项内加此配置
  configureWebpack: {
    externals:{
      './cptable': 'var cptable'
    }
  }
:::