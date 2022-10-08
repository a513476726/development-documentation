# el-ex-table
> 基于数据来构建Table

### 基本用法

::: demo 基于数据来构建Table
```html
<template>
  <div class="main-section">
    <div class="main-section-item">
      <el-ex-table
        :columnRule="columnRule"
        :tableData="tableData"
        :tableHeight="'calc(100vh - 400px)'"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'ElExTableDemo',
  data() {
    return {
      columnRule:[
        {type:'',prop:'id',label:"id",width:'',align:'center'},
        {type:'',prop:'order',label:"保单号",width:'',align:'center'},
        {type:'',prop:'provinceName',label:"省",width:'120',align:'center'},
        {type:'',prop:'cityName',label:"市",width:'120',align:'center'},
        {type:'',prop:'countyName',label:"区",width:'120',align:'center'},
        {
          type:'button',
          prop:'epolicy',
          label:"PDF文件",
          width:'120',
          align:'center',
          fixed:'',
          buttons:[
            {
              name:'下载',
              show:(index, item, data)=>{
                return true
              },
              disabled:(index, item, data)=>{
              },
              function:(index, item, data)=>{
              }
            }
          ]
        },
        {
          type:'button',
          prop:'address',
          label:"操作",
          width:'200',
          align:'center',
          fixed:'right',
          buttons:[
            {
              name: '编辑',
              // 按钮显隐逻辑判断
              show: (index, item, data) => {
                return true
              },
              // 按钮禁用逻辑判断
              disabled: (index, item, data) => {
                return index % 2 == 0 ? true : false
              },
              // 触发自定义方法
              function: (index, item, data) => {
              },
            },
            {
              name: '删除',
              // 按钮显隐逻辑判断
              show: (index, item, data) => {
                return index % 2 == 0 ? true : false
              },
              // 按钮禁用逻辑判断
              disabled: (index, item, data) => {
                return true
              },
              // 触发自定义方法
              function: (index, item, data) => {
              },
            },
            {
              name: '查看详情',
              show: (index, item, data) => {
                return true
              },
              disabled: (index, item, data) => {
                return false
              },
              function:(index, item, data)=>{
                this.toDetail(index, item, data)
              }
            }
          ]
        },
      ],
      tableData: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList(val){
      setTimeout(()=>{
        const objData = {
          code:'0000',
          list:[
            {
                "id":"1561921530181586944",
                "order":"ASDFGHJ8999",
                "name":"李四",
                "provinceCode":"130000000000",
                "cityCode":"130300000000",
                "countyCode":"130303000000",
                "provinceName":"河北省",
                "cityName":"秦皇岛市",
                "countyName":"山海关区",
                "detailAddress":"河北省 / 秦皇岛市 / 山海关区",
            },
            {
                "id":"1561921530181586945",
                "order":"ASDFGHJ9000",
                "name":"李五",
                "provinceCode":"130000000000",
                "cityCode":"130300000000",
                "countyCode":"130303000000",
                "provinceName":"河北省",
                "cityName":"秦皇岛市",
                "countyName":"山海关区",
                "detailAddress":"河北省 / 秦皇岛市 / 山海关区",
            },
          ],
          msg:'成功'
        }
        if(objData.code !== '0000') return;
        this.tableData = objData.list;
      },1000)
    },
    toDetail(index, item, data){
      console.log(index, item, data)
      console.log('跳转详情')
    }
  },
}
</script>
```
:::

### ElExTable Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| columnRule   | 表格数据规则 | array      |                  —                |  — |
| tableData   | 表格数据 | array      |                  —                |  — |
| tableHeight   | Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。 | string      |                  —                |  — |


### ColumnRule Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type   | 数据类型 | string      |                  空 / button                |  undefined / null / ''（空） |
| prop   | 字段名称,规定展示哪个字段的数据。 | string      |                  —                |  — |
| label   | 标题名称 | string      |                  —                |  — |
| width   | 当前列宽度 | string      |                  例如：'120'                |  — |
| align   | 对齐方式 | string      |                  left/center/right                |  center |
| fixed   | 列是否固定在左侧或者右侧，true 表示固定在左侧 | string, boolean      |                  false, true, left, right                | false |
| buttons   | 当type='button' 时，展示此数据内的按钮集合 | array      |                  —                |  — |

:::tip index, item, data 数据说明
 index 表示数据当前位置,
 item 表示当前数据,
 data 是全部数据.
:::
### ColumnRule buttons Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 接收参数 |
|---------- |-------------- |---------- |--------------------------------  |-------- |--------
| name   | 按钮名称 | string      |                  —                |  — | — 
| show   | 显/隐 | function      |                  —                |  — |index, item, data
| disabled   | 禁用/启用 | function      |                  —                |  — |index, item, data
| function   | 点击回调方法 | function      |                  —                |  — |index, item, data