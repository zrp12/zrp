# Vue Element Plus 后台管理系统

- vue-router
    - RouteRecordRaw 类型
        meta 可选类型  title needsLogin role
    - NProgress
        beforeEach start
        afterEach done

- 按需加载 element-plus
- elementPlus 图标字体库
    - elementPlus 组件库
    - 企业级，有自己的设计师，图标要用自己的，所以没必要用ElementPlus的，更小
- es6 模块化语法点
    - import 的本意是将依赖模块中的相应功能引入当前模块，并在当前模块取个代表名字
    - export + export default
    - * as 全部输出  管他哪种  (import * as  是 es6 的语法，可以批量导入)
    - import xxx, {x, y, z} 解构 前者是默认值，后者按需
    - import XX from '' 最简单
    - import type 类型定义引入 用ts 开发的时候
- es6 的代码可读性
    - for of
    - 解构
    - Object.entries() 将对象变成二维数组，且每项都是key-value
        在一次性批量导入图标库中很方便

- ts 功能点
    - type 和 interface 都要到位

- 组件与通信
    - collapse
        - 数据状态驱动的界面 MVVM
        - 跨组件  选择pinia 或父组件分配

- 组件的概念
    - html,css,js 集合完成某项功能，好复用，页面有组件构成
    - 组件可以以html的方式插入DOM树
    - 不能和html标签一样，建议中间 

- scoped原理
    - 项目介绍必须表达的简单语法
    - css 不会污染全局
    - 会给每个类名元素有关随机哈希的data-v-hash 属性
    - css 经编译带上这个属性选择器

- scoped , .vue vue setup 选项式API lang='ts' lang='scss'
    - import 引入一张照片 css文件
    - 因为有vite 这样的工程化方案
    - 编译

## 如何介绍自己的项目
    - vue 能力，element plus 熟吗  vue的相关考点，性能优化
    - 难点 项目中有没有亮点
    - 是什么项目
        旅游/学习/ai项目 不要说仿  移除相关的logo 和 文字  尊重著作权
    - 实现了哪些功能
        1. 登录/注册/退出功能
        2. AI应用列表 loadmore 功能
        3. gpt 聊天功能
        4. 文生图
        5. 定制了tab栏，滑动单元格，tabber与轮播图切换显示功能
    - 技术栈
        vue-router
            historyRouter / 路由懒加载/结合meta 路由守卫 (用户角色权限设置)
            一级路由 二级路由 router-link router-view (全局组件) SPA
            vue-router 源码 (包围圈)
        pinia
            数据通信 传统的麻烦 超越父兄子孙 全局共享
            通信原理(包围圈)
        vant/element-plus
            从UI组件库学到了很多东西
                - 什么是UI组件库
                - 组件的概念
                    父兄子孙 关系
                - 页面级别组件 views
                - 父组件持有数据状态(ref)，子组件只负责渲染(props,无状态)
                - 通用组件 超越页面复用的  components
                - UI组件库 70%的组件需求都是一样的 不用重复造轮子
                    - 举例子
                        - form 表单 校验和数据的收集，只需要配置一下就好了
                        约定大于一切 省事
                        - dropdown   插槽的用法 定制性很强
                            Dialog组件 如何复用
                - typescript
                    - 类型定义 js的超级
                    - types 架构
                    - 泛型 ref reactive promise
                    - 函数参数
                    - 99%以上的错误减少 适合大型项目  vue3的重要特性
                - hooks
                    - 函数式编程
                    - 响应式业务的封装复用 loadmore 举例