# Table 列表组件

> 用数据结构来展示列表

![Alt text](./table.png "table")


:::demo

```vue
<template>
一个table组件的二次封装
</template>
<template>
  <div class="app-table">
    <el-table
      :data="tableData"
      :height="tableHeight"
      border
      style="width: 100%"
      header-row-class-name="table-header-bg"
    >
      <template v-for="(item,index) in columnRule">
        <el-table-column
          v-if="item.children && item.children.length > 0"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :align="item.align || 'center'"
          :fixed="item.fixed || null"
        >
          <template v-for="(oneLevel,oneLevelIndex) in item.children">
            <!-- 正常数据 -->
            <el-table-column
              :key="oneLevelIndex"
              :show-overflow-tooltip="true"
              :prop="oneLevel.prop"
              :label="oneLevel.label"
              :width="oneLevel.width"
              :align="oneLevel.align || 'center'"
            >
              <template slot-scope="scope">
                {{ ((scope.row[oneLevel.prop] || '—') + '')}}
              </template>
            </el-table-column>
          </template>
        </el-table-column>
        <!-- 按钮 -->
        <el-table-column
          v-else-if="item.type === 'button'"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :align="item.align || 'center'"
          :fixed="item.fixed || null"
        >
          <template slot-scope="scope">
            <template v-for="(button,buttonIndex) in item.buttons">
              <el-button
                :key="buttonIndex"
                v-if="button.show(scope.$index, scope.row, tableData)"
                :disabled="button.disabled(scope.$index, scope.row, tableData)"
                @click.native.prevent="button.function(scope.$index, scope.row, tableData)"
                type="text"
                size="small">
                {{button.name || '—'}}
              </el-button>
            </template>
          </template>
        </el-table-column>
        <!-- 正常数据 -->
        <el-table-column
          v-else
          :key="index"
          :show-overflow-tooltip="true"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :align="item.align || 'center'"
        >
          <template slot-scope="scope">
            {{ ((scope.row[item.prop] || '—') + '')}}
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
export default ({
  name:"ElExTable",
  props:{
    tableData:{
      type:Array,
      require:true,
      default:() => []
    },
    columnRule:{
      type:Array,
      require:true,
      default:() => []
    },
    tableHeight:{
      type:String,
      require:false,
      default:'400px',
    },
  },
  data(){
    return {}
  },
  mounted() {
  },
  methods: {
  },
})
</script>
<style scoped>
:deep(.el-table .table-header-bg .el-table__cell){
  background:#f4f4f5 !important
}
</style>
```

:::
