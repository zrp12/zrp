# 全栈必考 restful

- 为什么要做一个网站？
    介绍和展示自己的产品和内容
    技术 网站的概念 一切皆资源
        resource 向外暴露  restful

- db.json
    - json数据
    - json-server (npm包)  后端数据
    - 资源

- db.json 资源文件
    - http 服务
    - json-server 提供http服务
       http://localhost:3000/users   restful 设计原则
       http://localhost:3000/posts   


## restful 网站开发世界
    - db.json 拥有的资源  json  文件的方式
       - posts
       - users
    - restful 定义了资源的提供方式
       名词 + 动词   组成资源暴露的方式
       资源 名词  posts
       - Method  GET   列表
       - url   localhost:3000/posts

       HTTP动作
       GET 读 详情  localhost:3000/posts/:id  id是动态参数  /posts文章资源
       POST  写(新增)  localhost:3000/posts
       修改 一个用户  localhost:3000/posts/users/5

    - postman 是什么？
       http 请求的模拟工具

    - http协议
       POST  https://localhost:3000/users   { id: 4 }   { id : 4 } 201
       http协议是基于请求响应的简单协议
        - 请求
            1. 请求行 http Method[GET|POST|PATCH|PUT|DELETE]  +  url  (PATCH局部修改 PUT全部修改)
            统一资源定位符
            2. 请求头 Cookie
            3. 请求体 表单数据
        
        - 响应
            1. 响应头  200|201|304状态码
            2. 响应体 json


       