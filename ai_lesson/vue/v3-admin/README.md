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