---
title: 小程序改造说明
categories:
      - vue2-to-vue3
tags:
 - vue2-to-vue3
---


# 小程序改造说明

> 项目名称：自助索赔小程序 ind-claim-mp-web

## 业务需求

- 针对千企千面的客户需求，实现不同客户展示不通主题，功能模块，页面布局。
- 提供老年版模式。
- 小程序底部tab签。
- UI界面调整。
- 小程序加载速度，流畅度优化。（css, js, image等资源）



## 改造目标

现有框架存在技术老旧，代码冗余，单页逻辑过多，代码规范性差，以及样式等问题，无法很好支持千企千面的需求，

所以此次改造目标。

1. 解决css冗余。
2. 支持多端跨平台。
3. 支持主题动态切换。
4. 优化小程序打包大小。
5. 支持按需加载资源，优化速度。
6. 单页复杂代码拆分。
7. vue2 升级为 vue3，为日后开发提供更优秀的技术支持。
8. 统一编码规范，执行统一标准，增加沟通效率。



## 技术栈变化

|      类型      |                             之前                             |                             之后                             |       备注        |
| :------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :---------------: |
| javaScript框架 |                             Vue2                             |                             Vue3                             |       升级        |
|    跨端框架    |                            uniapp                            |                            Taro3                             |       更替        |
|    状态管理    |                             Vuex                             |                            Pinia                             |       升级        |
|    css框架     |                  Sass, scoped(解决样式污染)                  | Sass, CSS Modules(解决样式污染) ,  Tailwindcss(解决冗余css，规范css) | 升级 + 引入新框架 |
|    打包工具    |                uniapp 软件（底层也是webpack）                |                          wepack5.0+                          |       更替        |
|    网络请求    |                         uni.request                          |                            axios                             |       更替        |
|     UI框架     | vantui(只支持小程序)、uniui（支持跨端）、小程序ui（只支持小程序） |               nutui（支持跨端、自动按需引入）                |       更替        |
|    类型校验    |                              无                              |                          TypeScript                          |       引入        |
|      图标      |                           iconfont                           |                iconfont组件化（自动按需引入）                |       升级        |



## 排期计划

### 简单类（第一批）

>
> 时间:1天
> 数量:11
> 监管服务类页面，重复度高，改造组件化
>



| 名称                       | 路由                                            | 改造难度（简单、容易、复杂、困难） |
| -------------------------- | ----------------------------------------------- | ---------------------------------- |
| 我的服务订单               | pagesA/dataAndSetting/myOrder/myOrderList       | 简单                               |
| 我的购药订单               | pagesA/dataAndSetting/myOrder/myGouYaoOrderList | 简单                               |
| 健管服务 - 健康资讯        | pagesA/jianGuanService/jianGuanInfoMation       | 简单                               |
| 健管服务 - 购药服务        | pagesA/jianGuanService/gouYaoService            | 简单                               |
| 健管服务 - 健康服务        | pagesA/jianGuanService/jianKangService          | 简单                               |
| 健管服务 - 健康服务WebView | pagesA/jianGuanService/jianGuanServiceWebView   | 简单                               |
| 健管服务 - 我的健康服务    | pagesA/jianGuanService/myJianKangService        | 简单                               |
| 健管服务 - 微信支付页      | pagesA/jianGuanService/wxPay                    | 简单                               |
| 健管服务 - 附近药房        | pagesA/jianGuanService/gouYaoBranch             | 简单                               |
| 健管服务 - 购药直付        | pagesA/jianGuanService/gouYaoQRCode             | 简单                               |
| 健管服务 - 线上药房        | pagesA/jianGuanService/onLineGouYao             | 简单                               |


### 简单类（第二批）

>
> 时间:1天
> 数量:9
>


| 名称                                          | 路由                        | 改造难度（简单、容易、复杂、困难） |
| --------------------------------------------- | --------------------------- | ---------------------------------- |
| 主页                                          | pages/home/home             | 简单                               |
| 主页                                          | pages/home/home             | 简单                               |
| 400电话服务                                   | pages/home/webView          | 简单                               |
| 帮助中心                                      | pages/help/index            | 简单                               |
| pdf(web-view)                                 | pages/cation/components/pdf | 简单                               |
| 立即索赔（4） - 提交成功                      | pages/claim/submit/submit   | 简单                               |
| 首页 - 视屏播放                               | pages/videoPlay/videoPlay   | 简单                               |
| 帮助中心详情页 - 索赔申请所需单证材料注意事项 | pagesA/help/helpList        | 简单                               |
| 帮助中心 - 详情页                             | pagesA/help/helpDetail      | 简单                               |

### 容易类

>
> 时间:6天
> 数量:16
>


| 名称                          | 路由                                                | 改造难度（简单、容易、复杂、困难） |
| ----------------------------- | --------------------------------------------------- | ---------------------------------- |
| 资料与设置                    | pages/dataAndSetting/index                          | 容易                               |
| 我的索赔进度                  | pages/cainim/itemca                                 | 容易                               |
| 保险方案                      | pages/cation/index                                  | 容易                               |
| 保险方案 - 详情               | pages/cation/components/insurance-details           | 容易                               |
| 立即索赔（2） - 一键上传      | pages/claim/uploadImage/uploadImage                 | 容易                               |
| 立即索赔（3） - 索赔单证预览  | pages/claim/picturePreview/picturePreview           | 容易                               |
| 注册页                        | pages/login/register                                | 容易                               |
| 登录页 - 微信登录 -  账号绑定 | pages/login/binding                                 | 容易                               |
| 登录 - 身份验证               | pages/login/loginVerification                       | 容易                               |
| 微信绑定                      | pagesA/dataAndSetting/wxbinding/wxbinding           | 容易                               |
| 我的银行卡                    | pagesA/dataAndSetting/bankCard/bankCard             | 容易                               |
| 我的证件                      | pagesA/dataAndSetting/certificates/certificates     | 容易                               |
| 我的证件 - 列表               | pagesA/dataAndSetting/certificates/certificatesList | 容易                               |
| 我的家庭                      | pagesA/dataAndSetting/family/family                 | 容易                               |
| 登录页                        | pages/login/accountLogin                            | 容易                               |
| 个人图像设置                  | pagesA/dataAndSetting/setting/settingHeadImage      | 容易                               |

### 复杂类

>
> 时间:2天
> 数量:4
> UI重构
>


| 名称                    | 路由                                          | 改造难度（简单、容易、复杂、困难） |
| ----------------------- | --------------------------------------------- | ---------------------------------- |
| 登录主页                | pages/login/loginHome                         | 复杂                               |
| 索赔详情                | pages/cabtn/caindex                           | 复杂                               |
| 我的家庭 - 新增、编辑   | pagesA/dataAndSetting/family/addFamily        | 复杂                               |
| 我的银行卡 - 添加与编辑 | pagesA/dataAndSetting/bankCard/bankAddandEdit | 复杂                               |

### 困难类

>
> 时间：2天
> 数量：1
> 按责任渲染组件，逻辑重新设计。UI重构
>


| 名称          | 路由                                          | 改造难度（简单、容易、复杂、困难） |
| ------------- | --------------------------------------------- | ---------------------------------- |
| 立即索赔（1） | pages/claim/immediatelyClaim/immediatelyClaim | 困难                               |



## 所有页面数据（数量41）


| 名称                                          | 路由                                                | 改造难度（简单、容易、复杂、困难）         |
| --------------------------------------------- | --------------------------------------------------- | ------------------------------------------ |
| 主页                                          | pages/home/home                                     | 简单                                       |
| 登录主页                                      | pages/login/loginHome                               | 复杂                                       |
| 400电话服务                                   | pages/home/webView                                  | 简单                                       |
| 立即索赔（1）                                 | pages/claim/immediatelyClaim/immediatelyClaim       | 困难                                       |
| 帮助中心                                      | pages/help/index                                    | 简单                                       |
| 资料与设置                                    | pages/dataAndSetting/index                          | 容易                                       |
| 我的索赔进度                                  | pages/cainim/itemca                                 | 容易                                       |
| 保险方案                                      | pages/cation/index                                  | 容易                                       |
| 保险方案 - 详情                               | pages/cation/components/insurance-details           | 容易                                       |
| pdf(web-view)                                 | pages/cation/components/pdf                         | 简单                                       |
| 索赔详情                                      | pages/cabtn/caindex                                 | 复杂                                       |
| 立即索赔（2） - 一键上传                      | pages/claim/uploadImage/uploadImage                 | 容易                                       |
| 立即索赔（3） - 索赔单证预览                  | pages/claim/picturePreview/picturePreview           | 容易                                       |
| 立即索赔（4） - 提交成功                      | pages/claim/submit/submit                           | 简单                                       |
| 首页 - 视屏播放                               | pages/videoPlay/videoPlay                           | 简单                                       |
| 登录页                                        | pages/login/accountLogin                            | 容易                                       |
| 注册页                                        | pages/login/register                                | 容易                                       |
| 登录页 - 微信登录 -  账号绑定                 | pages/login/binding                                 | 容易                                       |
| 登录 - 身份验证                               | pages/login/loginVerification                       | 容易                                       |
| 帮助中心详情页 - 索赔申请所需单证材料注意事项 | pagesA/help/helpList                                | 简单                                       |
| 帮助中心 - 详情页                             | pagesA/help/helpDetail                              | 简单                                       |
| 资料与设置 - 设置                             | pagesA/dataAndSetting/setting/setting               | 简单                                       |
| 个人图像设置                                  | pagesA/dataAndSetting/setting/settingHeadImage      | 容易                                       |
| 微信绑定                                      | pagesA/dataAndSetting/wxbinding/wxbinding           | 容易                                       |
| 我的银行卡                                    | pagesA/dataAndSetting/bankCard/bankCard             | 容易                                       |
| 我的证件                                      | pagesA/dataAndSetting/certificates/certificates     | 容易                                       |
| 我的证件 - 列表                               | pagesA/dataAndSetting/certificates/certificatesList | 容易                                       |
| 我的家庭                                      | pagesA/dataAndSetting/family/family                 | 容易                                       |
| 我的家庭 - 新增、编辑                         | pagesA/dataAndSetting/family/addFamily              | 复杂                                       |
| 我的银行卡 - 添加与编辑                       | pagesA/dataAndSetting/bankCard/bankAddandEdit       | 复杂                                       |
| 我的服务订单                                  | pagesA/dataAndSetting/myOrder/myOrderList           | 简单（监管服务类页面，重复度高，应组件化） |
| 我的购药订单                                  | pagesA/dataAndSetting/myOrder/myGouYaoOrderList     | 简单                                       |
| 健管服务 - 健康资讯                           | pagesA/jianGuanService/jianGuanInfoMation           | 简单                                       |
| 健管服务 - 购药服务                           | pagesA/jianGuanService/gouYaoService                | 简单                                       |
| 健管服务 - 健康服务                           | pagesA/jianGuanService/jianKangService              | 简单                                       |
| 健管服务 - 健康服务WebView                    | pagesA/jianGuanService/jianGuanServiceWebView       | 简单                                       |
| 健管服务 - 我的健康服务                       | pagesA/jianGuanService/myJianKangService            | 简单                                       |
| 健管服务 - 微信支付页                         | pagesA/jianGuanService/wxPay                        | 简单                                       |
| 健管服务 - 附近药房                           | pagesA/jianGuanService/gouYaoBranch                 | 简单                                       |
| 健管服务 - 购药直付                           | pagesA/jianGuanService/gouYaoQRCode                 | 简单                                       |
| 健管服务 - 线上药房                           | pagesA/jianGuanService/onLineGouYao                 | 简单                                       |



## 编码要求

> 待完善...


