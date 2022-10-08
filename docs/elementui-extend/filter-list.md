# el-ex-filter-list 筛选table组件

> 基于数据格式，来展示组件内容

:::demo 基于 `数据结构` 来定义展示筛选项

```vue
<template>
  <div class="main-section">
    <div class="main-section-item">
      <ElExFilterList
        :filter-data="filterData"
        :labelWidth="'120px'"
        @toQuery="toQuery"
        @setReset="setReset"
      >
        <!-- 在原本框架内，只可以定义除标题外的内容 -->
        <template #slot1>
          <el-input
            type="input"
            v-model="filterQuery.value1"
          ></el-input>
        </template>
        <!-- 脱离标题，输入框的结构，自定义内容 -->
        <template #slot2>
          <el-form-item :label="'独立插槽'">
            <el-input
              type="input"
              v-model="filterQuery.value2"
            ></el-input>
          </el-form-item>
        </template>
      </ElExFilterList>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ElExFilterListDemo',
  data() {
    return {
      filterData: [],
      filterQuery: {
        value1:'',
        value2:'',
      },
    }
  },
  computed: {
  },
  mounted() {
    // 地区数据
    const CITY_LIST = [
      {
        label: "北京市",
        value: "110000000000",
        children:[{
          label: "市辖区",
          value: "110100000000",
          children:[{label: "东城区",value: "110101000000"}],
        }],
      }
    ];
    // 初始化筛选列表
    this.filterData = [
      {
        type:'input',
        label:'订单号',
        model:'policyNo',
        modelValue:'',
      },
      {
        type:'cascader',
        label:'区域',
        model:'__city',
        modelValue:[],
        props:{ checkStrictly: true },
        options:(()=> CITY_LIST )(),
      },
      { type:'input',label:'用户名称',model:'holderName',modelValue:'',},
      { type:'slot', name:'slot1',label:'框架内插槽'},
      { type:'slotFormItem', name:'slot2'},
    ]
  },
  methods: {
    toQuery(val){
      console.log('查询按钮触发事件')
      console.log(JSON.stringify(val))
      console.log('插槽的组件数据')
      console.log(JSON.stringify(this.filterQuery))
    },
    setReset(){
      console.log('重置按钮触发事件')
    },
  },
}
</script>
<style scoped>
.main-section{
  background-color: #f7f7f7;
}
.main-section-item{
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
}
</style>

```

:::


### ElExFilterList Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 接收参数
|---------- |-------------- |---------- |--------------------------------  |-------- |--------
| filterData   | 表格数据规则 | array      |                  —                |  — |  —
| labelWidth   | 标题宽度 | string      |                  —                |  — | —
| toQuery   | 查询按钮触发 | function      |                  —                |  — | object（查询项的key与value集合）
| setReset   | 重置按钮触发 | function      |                  —                |  — | —

### ElExFilterList filterData Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type   | 筛选项类型 | string      |                 input,cascader,slot, slotFormItem   |  — |
| label   | 筛选项标题 | string      |                  —                |  — |
| model   | 数据key, toQuery 触发回调时返回的对象内的key | function      |                  —                |  — |
| modelValue   | 数据value, toQuery 触发回调时返回的对象内的key对应的value| function      |                  —                |  — |
| props   | Element-UI的input,cascader 的props | object      |                  —                |  — |
| options   | 下拉数据 | array      |                  —                |  — |
| name   | 插槽名称 | string      |                  —                |  — |