---
title: BatchImport 批量导入
categories:
      - elementui-extend
tags:
 - elementui-extend
---


### 快速导航
<TOC />

### 实例展示


::: warning 注意事项!
todo: 因第一版开发后上线前需求调整，导致设计有些混乱，后续版本会纠正完善。
:::

:::demo 按一定`规则`将编辑好的`EXCEL文件`导入后，经过`解析`，`校验`，实现批量新增数据的功能。


```vue
<template>
  <div class="main-section">
    <div>
      <el-button type="primary" @click="showFunction('batchImport')">批量导入</el-button>
      <!-- 批量导入 -->
      <ElExBatchImport
        v-if="show.batchImport"
        :templatePath="mixinsInitFileFormat.file.path"
        :templateName="mixinsInitFileFormat.file.name"
        :fileFormat="mixinsInitFileFormat.fileFormat"
        :fileSuccess="__mixinsBatchImportSuccess"
        @close="hideFunction('batchImport')"
      >
      </ElExBatchImport>
    </div>
  </div>
</template>
<script>

// 只能为数组和字母
const LETTER_AND_NUMBER = /^[A-Za-z0-9]{4,50}$/;
const LETTER_AND_NUMBER_MASSAGE = "只能为数字或字母，且长度为4-50";

// 比例 1-100 小数点可以后两位
const PROPORTIONS = /^([0-9]{1,2}$)|(^[0-9]{1,2}\.[0-9]{1,2}$)|100$/;
const PROPORTIONS_MESSAGE = '只能输入1-100,小数部分只能保留1或2位';

// 金额保留两位小数
const MONEY = /^[1-9]+[0-9]*(.[0-9]{1,2})?$/;
const MONEY_MASSAGE = '金额必须为数字可保留一或两位小数，且首个字母不能为0';

// 日期格式校验 yyyy-MM-dd HH:mm:ss / yyyy/MM/dd HH:mm:ss
const DATE = /([0-9]{4})(\/|-)([0-9]{2})(\/|-)([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})/;
const DATE_MESSAGE = '日期格式错误，标准格式：2020-01-01 13:10:00 或 2020/01/01 13:10:00';

// 社会信用代码
const CREDIT_CODE = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/i;
const CREDIT_CODE_MESSAGE = '统一社会信用代码格式不标准或不是18位';

// 正整数
const NUMBER = /^[1-9]+[0-9]*$/;
const NUMBER_MASSAGE = '不符合正整数标准'

export default {
  name: 'ElExBatchImportDemo',
  data() {
    return {
      show:{
        batchImport:false
      },
      mixinsInitFileFormat:{
        "file":{
          "path":'../批量新增-保单模版.xlsx', // xlsx模版路径
          "name":'批量新增-保单模版.xlsx', // 下载时的名字
        },
        "fileFormat":[
          {
            "fieldZh": "产品名称",
            "fieldCh": "productName",
            "rule":[
              {
                "require": "true",
                "message":"产品名称是必填选项",
                "validateName":'productName',
              },
              {
                "length":[1,25],
                "message":"产品名称最长25位",
                "validateName":'productName',
              },
            ]
          },
          {
            "fieldZh": "保单号",
            "fieldCh": "insurancePolicyNo",
            "rule":[
              {
                "require": "true",
                "message":"保单号是必填选项",
                "validateName":'insurancePolicyNo',
              },
              {
                "validate":LETTER_AND_NUMBER,
                "message":"保单号" + LETTER_AND_NUMBER_MASSAGE,
                "validateName":'insurancePolicyNo',
              }
            ]
          },
          {
            "type":"cascader",
            "fieldZh": "企业类型（一级）",
            "level":['企业类型（一级）','企业类型（二级）'],
            "format":{
              "name":"__orgTypeOneName",
              "code":"__orgTypeOneCode",
              "props":{
                "label":"label",
                "value":"value",
              },
              "options":[],
            },
            "rule":[
              {
                "require": "true",
                "message":"EXCEL的企业类型（一级）填写的内容未匹配到,请参考保单新增的企业类型下拉数据。",
                "validateName":'__orgTypeOneCode',
              },
              {
                "require": "true",
                "message":"EXCEL的企业类型（一级）填写的内容未匹配到,请参考保单新增的企业类型下拉数据。",
                "validateName":'__orgTypeOneName',
              },
              {
                "require": "true",
                "message":"EXCEL的企业类型（二级）填写的内容未匹配到,请参考保单新增的企业类型下拉数据。",
                "validateName":'__orgTypeTwoCode',
              },
              {
                "require": "true",
                "message":"EXCEL的企业类型（二级）填写的内容未匹配到,请参考保单新增的企业类型下拉数据。",
                "validateName":'__orgTypeTwoName',
              },
            ]
          },
          {
            "type":"cascader",
            "fieldZh": "企业类型（二级）",
            "format":{
              "name":"__orgTypeTwoName",
              "code":"__orgTypeTwoCode",
              "props":{
                "label":"label",
                "value":"value",
              }
            },
          },
          {
            "type":"select",
            "fieldZh": "保险机构",
            "format":{
              "name":"insuranceCompanyName",
              "code":"insuranceCompanyCode",
              "props":{
                "label":"orgName",
                "value":"orgCode",
              },
              "options":[],
            },
            "rule":[
              {
                "require": "true",
                "message":"EXCEL的保险机构填写的内容未匹配到,请参考保单新增的保险机构下拉数据。",
                "validateName":'insuranceCompanyCode',
              },
              {
                "require": "true",
                "message":"EXCEL的保险机构填写的内容未匹配到,请参考保单新增的保险机构下拉数据。",
                "validateName":'insuranceCompanyName',
              },
            ]
          },
          {
            "fieldZh": "营业面积（平米）",
            "fieldCh": "businessArea",
            "rule":[{
              "validate":NUMBER,
              "message":NUMBER_MASSAGE,
              "validateName":'businessArea',
            }],
          },
          {
            "fieldZh": "供餐人数",
            "fieldCh": "serveFoodNumber",
            "rule":[{
              "validate":NUMBER,
              "message":NUMBER_MASSAGE,
              "validateName":'serveFoodNumber',
            }],
          },
          {
            "fieldZh": "投保日期",
            "fieldCh": "applicationDate",
            "rule":[{
              "validate":DATE,
              "message":DATE_MESSAGE,
              "validateName":'applicationDate',
            }],
          },
          {
            "fieldZh": "保险期间（开始日期）",
            "fieldCh": "insuranceStartDate",
            "rule":[{
              "validate":DATE,
              "message":DATE_MESSAGE,
              "validateName":'insuranceStartDate',
            }],
          },
          {
            "fieldZh": "保险期间（结束日期）",
            "fieldCh": "insuranceEndDate",
            "rule":[{
              "validate":DATE,
              "message":DATE_MESSAGE,
              "validateName":'insuranceEndDate',
            }],
          },
          {
            "fieldZh": "实收保费（元）",
            "fieldCh": "actualPrem",
            "rule":[
              {
                "require": "true",
                "message":"实收保费（元）是必填选项",
                "validateName":'actualPrem',
              },
              {
                "validate":MONEY,
                "message":"实收保费（元）" + MONEY_MASSAGE,
                "validateName":'actualPrem',
              },
            ],
          },
          {
            "fieldZh": "保险金额（元）",
            "fieldCh": "insuranceAmount",
            "rule":[
              {
                "require": "true",
                "message":"保险金额（元）是必填选项",
                "validateName":'insuranceAmount',
              },
              {
                "validate":MONEY,
                "message":"保险金额（元）" + MONEY_MASSAGE,
                "validateName":'insuranceAmount',
              },
            ],
          },
          {
            "fieldZh": "事故预防费用（元）",
            "fieldCh": "accidentPreventionAmount",
            "rule":[
              {
                "require": "true",
                "message":"事故预防费用（元）是必填选项",
                "validateName":'accidentPreventionAmount',
              },
              {
                "validate":MONEY,
                "message":"事故预防费用（元）" + MONEY_MASSAGE,
                "validateName":'accidentPreventionAmount',
              },
            ],
          },
          {
            "fieldZh": "事故预防比例（%）",
            "fieldCh": "accidentPreventionProportion",
            "rule":[
              {
                "require": "true",
                "message":"事故预防比例是必填选项",
                "validateName":'accidentPreventionProportion',
              },
              {
                "validate":PROPORTIONS,
                "message":"事故预防比例" + PROPORTIONS_MESSAGE,
                "validateName":'accidentPreventionProportion',
              },
            ],
          },
          {
            "type":"select",
            "fieldZh": "承保性质",
            "format":{
              "name":"",
              "code":"underwritingNature",
              "props":{
                "label":"label",
                "value":"value",
              },
              "options":[{label:"独立承保",value:'0'},{label:"共保",value:'1'}],
            },
            "rule":[
              {
                "require": "true",
                "message":"EXCEL的承保性质填写的内容未匹配到,请参考保单新增的承保性质下拉数据。",
                "validateName":'underwritingNature',
              }
            ],
          },
          {
            "fieldZh": "共保体",
            "fieldCh": "coinsurance",
            "require": "false",
            "rule":[
              {
                "length":[0,500],
                "message":"共保体最长500个字符长度",
                "validateName":'coinsurance',
              },
            ],
          },
          {
            "fieldZh": "被保险人名称",
            "fieldCh": "insuredName",
            "rule":[
              {
                "require": "true",
                "message":"被保险人名称是必填选项",
                "validateName":'insuredName',
              },
              {
                "length":[1,25],
                "message":"被保险人名称最长25个字符长度",
                "validateName":'insuredName',
              },
            ],
          },
          {
            "fieldZh": "被保险人统一社会信用代码",
            "fieldCh": "threeInOneCode",
            "rule":[
              {
                "require": "true",
                "message":"被保险人统一社会信用代码是必填选项",
                "validateName":'threeInOneCode',
              },
              {
                "validate":CREDIT_CODE,
                "message":"被保险人" + CREDIT_CODE_MESSAGE,
                "validateName":'threeInOneCode',
              },
            ],
          },
          {
            "type":"cascader",
            "fieldZh":"地区（省）",
            "level":['地区（省）','地区（市）','地区（区）'],
            "format":{
              "name":"provinceName",
              "code":"provinceCode",
              "props":{
                "label":"label",
                "value":"value",
              },
              "options":[],
            },
            "rule":[
              {
                "require": "true",
                "message":"EXCEL的地区（省）填写的内容未匹配到,请参考保单新增的地区下拉数据。",
                "validateName":'provinceCode',
              },
              {
                "require": "true",
                "message":"EXCEL的地区（省）填写的内容未匹配到,请参考保单新增的地区下拉数据。",
                "validateName":'provinceName',
              },
              {
                "require": "true",
                "message":"EXCEL的地区（市）填写的内容未匹配到,请参考保单新增的地区下拉数据。",
                "validateName":'cityCode',
              },
              {
                "require": "true",
                "message":"EXCEL的地区（市）填写的内容未匹配到,请参考保单新增的地区下拉数据。",
                "validateName":'cityName',
              },
              {
                "require": "true",
                "message":"EXCEL的地区（区）填写的内容未匹配到,请参考保单新增的地区下拉数据。",
                "validateName":'countyCode',
              },
              {
                "require": "true",
                "message":"EXCEL的地区（区）填写的内容未匹配到,请参考保单新增的地区下拉数据。",
                "validateName":'countyName',
              },
            ],
          },
          {
            "type":"cascader",
            "fieldZh":"地区（市）",
            "format":{
              "name":"cityName",
              "code":"cityCode",
              "props":{
                "label":"label",
                "value":"value",
              },
            },
          },
          {
            "type":"cascader",
            "fieldZh":"地区（区）",
            "format":{
              "name":"countyName",
              "code":"countyCode",
              "props":{
                "label":"label",
                "value":"value",
              },
            },
          },
          {
            "fieldZh": "详细地址",
            "fieldCh": "detailAddress",
            "rule":[
              {
                "require": "true",
                "message":"详细地址是必填选项",
                "validateName":'detailAddress',
              },
            ],
          },
          {
            "fieldZh": "投保人名称",
            "fieldCh": "holderName",
            "rule":[
              {
                "require": "true",
                "message":"被保险人名称是必填选项",
                "validateName":'holderName',
              },
              {
                "length":[1,25],
                "message":"被保险人名称最长25个字符长度",
                "validateName":'holderName',
              },
            ],
          },
          {
            "fieldZh": "投保人统一社会信用代码",
            "fieldCh": "holderThreeInOneCode",
            "rule":[
              {
                "require": "true",
                "message":"投保人统一社会信用代码是必填选项",
                "validateName":'holderThreeInOneCode',
              },
              {
                "validate":CREDIT_CODE,
                "message":"投保人"+CREDIT_CODE_MESSAGE,
                "validateName":'holderThreeInOneCode',
              },
            ]
          }
        ]
      }
    }
  },
  mounted() {
    this.__mixinsInit();
  },
  methods: {
    showFunction(name){
      this.show[name] = true
    },
    hideFunction(name){
      this.show[name] = false
    },
    // 整理数据，把接口数据放到数据结构内。
    __mixinsInit(){
      if(this.mixinsInitFileFormat.fileFormat[2]){
        const len = this.mixinsInitFileFormat.fileFormat[2].format.options.length;
        this.mixinsInitFileFormat.fileFormat[2].format.options.splice(0,len, ...[
          {
            "label":"食品生产企业",
            "value":"food_03",
            "children":[
              {
                "label":"粮食加工品",
                "value":"food_0301"
              },
              {
                "label":"食用油、油脂及其制品",
                "value":"food_0302"
              }
            ]
          },
          {
            "label":"餐饮服务单位",
            "value":"food_02",
            "children":[
              {
                "label":"食品摊贩",
                "value":"food_0211"
              }
            ]
          },
          {
            "label":"食品经营企业",
            "value":"food_01",
            "children":[
              {
                "label":"其它",
                "value":"food_0111"
              }
            ]
          }
        ]);
      }
      if(this.mixinsInitFileFormat.fileFormat[4]){
        const len = this.mixinsInitFileFormat.fileFormat[4].format.options.length;
        this.mixinsInitFileFormat.fileFormat[4].format.options.splice(0,len,...[
          {
              "orgName":"华泰财产保险有限公司",
              "orgCode":"0001300058"
          },
          {
              "orgName":"中国太平洋财产保险股份有限公司",
              "orgCode":"0001300052"
          },
          {
              "orgName":"阳光财产保险股份有限公司",
              "orgCode":"0001300041"
          }
        ]);
      }
      if(this.mixinsInitFileFormat.fileFormat[18]){
        const len = this.mixinsInitFileFormat.fileFormat[18].format.options.length;
        this.mixinsInitFileFormat.fileFormat[18].format.options.splice(0,len,...[{
          "label":"北京市",
          "value":"110000000000",
          "children":[
            {
              "label":"市辖区",
              "value":"110100000000",
              "children":[
                {
                  "label":"东城区",
                  "value":"110101000000"
                },
                {
                  "label":"西城区",
                  "value":"110102000000"
                }
              ]
            }
          ]
        }]);
      }
    },
    async __mixinsBatchImportSuccess(array){
      console.log('符合批量导入规则的数据')
      console.log(array)

      // 0000 代表流程结束 关闭loading
      return {
        code:'0000',
        msg:'批量新增完成'
      };
    },
  },
}

</script>
```

:::




### ElExBatchImport Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| templateName   | 模版文件名称 | string      |                  —                |  — |
| templatePath   | 模版文件路径 | string      |                  —                |  — |
| fileFormat   | 解析规则 | function      |                  —                |  — |
| fileSuccess   | 解析校验成功后回调 | function      |                  —                |  — |
| close   | 取消弹窗回调 | function      |                  —                |  — |





### ElExBatchImport fileFormat Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type   | 规则类型 | string      |                 空,select,cascader, |  — | 空
| fieldZh   | 标题名称 | string      |                  —                |  — |
| fieldCh   | 字段名称 | string      |                  —                |  — |
| rule   | 数据校验规则 | array      |                  —                |  — |
| format   | 非默认类型时规则 | object      |                  —                |  — |
| level   | cascader 类型时, 用来标记每一级的数据标题名称 | array      |                  —                |  — |





### ElExBatchImport rule Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| require   | 是否必填 | string      |                 "true","false",空 |  — | 空
| message   | 不满足校验提示 | string      |                  —                |  — |
| validateName   | 校验的字段名称 | string      |                  —                |  — |
| validate   | 正则数据校验 | RegExp      |                  —                |  — |
| length   | 数据长度校验 | array      |                  例如：[1,10] 1-10 位            |  — |





### ElExBatchImport format Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name   | 存储label数据的字段名 | string      |              —        |  — | 空
| code   | 存储value数据的字段名 | string      |                  —                |  — |
| props   | options数组内对应的label与value字段名 | object      |                  —                |  — |
| options   | 数据源，用于从数据源中筛选出想要的数据 | array      |                  —                |  — |

:::tip 假设前提有一条数据,以此数据为场景更好理解 format 规则

``` javascript
[
  {
    "label":"北京市",
    "value":"110000000000",
    "children":[
      {
        "label":"市辖区",
        "value":"110100000000",
        "children":[
          {
            "label":"东城区",
            "value":"110101000000"
          },
          {
            "label":"西城区",
            "value":"110102000000"
          }
        ]
      }
    ]
  }
]
```
> name 通过props指定的label拿到数据，并自定义一个字段名称用于存储。
>
> code 通过props指定的value拿到数据，并自定义一个字段名称用于存储。
>
> props 规定以 options 为数据源, 从哪个字段拿对应的 label，value。 如果用上述模拟数据 应是 "props":{ "label":"label","value":"value"}
>
> options 就是数据源，这里可以比作我们上面假设的数据
:::

:::tip 特别注意！
options的数据需要提前放进来
:::