# 前端第一开发框架React

- 安装 项目脚手架
    npm i -g create-react-app
    - npm config ls 查看配置项
        prefix
    - create-react-app --version
    - path prefix

- vue/react 流行的前端框架
    - 组件思想
        html + css + js 一个功能组合 幻灯片 轮播图 复用了
        返回JSX函数就是组件
        react 组件由 js文件 + css 组成  import
        开发的最小单元是组件
        App
        <App /> 像html一样的方式挂载
    - props
        props 是一个对象，可以传递数据
        父组件传过来的数据
        自有状态
    - mvvm 
        不再需要DOM编程（性能低下），关注业务，而不是API

- create-react-app my-react
    - github 拉去一个标准项目模板
        - src 开发项目
            - 入口文件
    - 安装项目依赖

## vue/react 如何运行起来
    - create-react-app 脚手架
        - 单页应用
    - npm run start
        web server 3000
    - public/index.html 首页
        - root 挂载点
        - ReactDOM.createRoot() 根节点， react 接管
        - ReactDOM.render()
        - App 根节点
        - React.createElement(tag, props,children) 创建节点
        - JSX 语法糖 创建节点 表现力更好
    - git clone template
    - npm i react