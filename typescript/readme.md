# 江峥扬成功分析

- 秋招提前批赛点
    - 大三同学的时间点，挂一些，拿一些
    - 大四同学的补录 10-14k，二线城市的大厂分部或内包
        - 面试经验  伪装成大三同学先去面 3-10家
    - 大二同学
        - 伪装成大三同学面试京东/米哈游
        - 秋招去百度
        - 远程实习就拿下了 (南昌线下)
        - 过年 字节
    - 代总
        - 实习安排及工作经验

## 需要哪些东西
    - 八股文 90%
    - 项目
        - 有一个全栈项目
        - 江总的高质量项目
    - 算法 字节等公司才考中等难度算法

## 项目要点
    - 给项目加上ts npm init vite typescript 
    src/js -> ts
        - router RouterRecordRaw
        - es6 模块知识点最后一击
            import type { RouteRecordRaw } from 'vue-router'
        - pinia
            数据管理
        - props
            defineProps<{
                items: RecentlyViewItem[]
            }>
        - 函数参数
            - 要给类型约定
                () => void
                node vue ref(null) -> html元素
                vue 是由 ts写出来的，有Ref 类型定义
                Ref<HTMLelement || null>
        - typescript 是静态的， js是动态的
            编译能力，写代码的时候就可以检测出问题
        - RouterRecordRaw 由vue-router 提供
        - 自定义类型
            - 所有响应式数据都需要约束
                ref reactive
            - types 目录， ts 项目多的一个架构
            - export type xxx = {
                key: string
                以分号隔开的类型声明空间
            }
            - ref是一个函数 约束函数的返回值
                <T> 
                ref<RecentlyViewItem[]>()

- tailwindcss
    - npx tailwindcss init
    - npx 是区别于npm的一个包管理工具
    - npx 可以运行node_modules 目录下(.bin/)的包的命令，如果没有安装，会自动安装，用完后自动删除（试一把）
    - 在测试员工机器上跑一下
    - .bin目录下是可执行的二进制

- vant
    - UI组件库
    - vite 工作流 自动引入
        - vite 是工程化工具 webpack
        - alias 短链接 resolve目录下 配置
        - plugins 插件系统
            直接全局使用vant 
            - @vant/auto-import-resolver
            - Components 
        - 方便，但性能不好
    - 按需加载，没有用到的组件不要引入，代码洁癖
    
- tailwindcss 原子化css
    - 真的很快
    - 适合后台界面开发
    - css 开发脚手架， powerful 工程化工具
    - 预编译功能 w-[calc(100vw-2rem)]

- 组件化
    - 组件的封装，页面由组件构成，组件思维
        一级路由，越简洁越好读
    - component: is
    - solt
    - 性能优化，生命周期 

- 性能优化
    - 路由组件懒加载
    - vant 按需加载
    - 防抖节流
    - 图片懒加载
    - 减少图片或优化图片
        gradient 的渐变 直接带来图片效果，但是不用图片 1kb?
        base64

- hooks 函数式编程 
    - useRouter useRoute
    - useHomeStore
    use开头 都是函数 非常好用 及时雨 
    - useStorage
        localStorage + ref(响应式) + watchEffect(观察者, watch监听)

- slot 
    插槽  <component> slot </component>
    - 提高组制的定制性，交给外界决定

- vue 组件内存泄
    - v-for 一定要加key
        - 顺序调整
        - 插入
        - vdom
    - 定时器 事件监听 一定要移除
        v-if v-show 组件下线
        组件下线，定时器或监听还在内存中，无法回收，导致内存泄漏
    - onUnmounted 生命周期

- vant 组件
    - UI组件库，加速开发 (选型，移动端)
    - 理解了插槽，读源码
    - 借鉴vant，写出了组件 (高复用)

- Login 页面介绍哪些
    - vant 快速搭建
    - 按需加载
    - form 校验 值得收集
    - slot 组件复用 插槽
    - 使用useRouter hook 函数跳转到注册

- watch 和 watchEffect
    监听
    深入了解vue的过程
    开始用watch 在响应式数据发生改变后，做点什么，要指定参数
    watchEffect 不用指定，直接给函数，按函数的依赖

- 生命周期
    - 事件监听要unmount removeEventListener 内存泄漏

- pinia
    - 相对于vuex优秀的年轻状态管理工具
    - vue开发就变成了组件开发和数据流两部分
    - 更好的共享状态，不用受插件层次等影响
    - 自由的使用defineStore 创建模块化的共享数据
    - vue提供了toRefs 方法方便的将store的响应式数据转换为ref对象
    - 不要滥用pinia
        - 有些组件只负责展示， stateless，通过props传递数据更好打理
        - 早期数据通信的初衷，回归父子传递

- html5语义化
    - header footer section main aside 
    article

- BEM 国际命名规范

- flex 考点
    flex-[0_0_auto]
- 组件化思想
    - vue等现代前端框架的核心特点
    - 页面由组件构成而不是html开发
    - 复用
    - 可维护性 可读性
    - 多人协作
    - 首页复杂，用组件拆分更好的降低首页的复杂度，更好维护
- 大厂不是面上的，是面试官帮你面上的
    在面试
- 面试官利益
    - 找人干活
    - 欣赏
    - 对 AI 了解
    - 颜值 稀缺

- 图片懒加载
    - IntersectionObserver 是一个 JavaScript 接口，用于
    监测目标元素是否出现在视口（viewport）内
    - 观察者模式
    - 页面性能 -> 懒加载 -> 三种方案 -> 观察者模式 -> hooks 复用

- 代码多写注释
    



