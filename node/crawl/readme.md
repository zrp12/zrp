# 从编程到AIGC

- 编程
   - 有一个要解决的问题？
   - 扎实的408 基础 计算机网络
   - 分布细化任务，伪代码，编写代码
   - 选择语言，编译器（二进制）， CPU（运行）
   - 函数超过10行，模块化划分为几个子函数，有利于代码的可读性和调试

- 让位给AIGC
    - 基于LLM 大模型
    - 哪些传统编程可以被LLM取代 prompt编程
    给LLM 下指示


## 爬虫 Crawl 后端问题
    - 他有我拿  浏览器只是上网的代理proxy
        先发送一个HTTP请求  url  GET  https://movie.douban.com/chart
        响应  html  字符串 
    - 解析html字符串，如果可以像css选择器一样，拿到了电影列表
    - 最后将所有的电影对象组成数组，以json数组的方式返回，Done    

## node 爬虫 后端功能
    - npm init -y  初始化为后端项目
        package.json  项目描述文件 
    - npm i  安装第三方包
    - require     
    - main.js 入口文件
        安排流程 
        npm i request-promise
        npm i cheerio 前端爬虫 i为安装
        