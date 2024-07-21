# AI全栈项目

## 前后端联调
- 前端
   - 利用bootstrap css框架快速完成界面搭建
   - container  框架
   - row 一行 块级 一行总共12列
   - col-md-6 6列宽度 
   - col-md-offset-3 3个单位的偏移量
   Layout  布局

    - table语义化
      table 表头
        thead
            tr 
              th
        tbody
            tr 
              td

    - 前端需要动态获取数据  DOM编程      
    fetch
- 后端
   提供数据  npm i (node package management)
   json-server  json文件快速编程后端数据的
   package
   - json 是对象字面量，也是前后端数据格式
   - npm init -y 初始化为后端
   - npm i json-server
   - json-server package
   - npm run dev (dev script-name)
       package,json 项目描述文件
       scripts

    - 前后端是分离
       html js fetch  页面动态
       json-server  提供数据接口
       端口不一样 3000 后端服务
       5173 前端
    - js 一统江湖
    - 界面做到小企业级别，后端使用轻量级的json-server
    - 这个后端方案是前端要会的，
      用json文件伪造下数据，只要把localhost改成后端给的线上地址就可以了
- AI
   提高openai的能力
- 走向AI Native AI全栈工程师
- 请问有哪些同学是老乡
- 这些同学都来自哪个省份

- form 表单
  - 标签要使用到位 无障碍访问
      input name 提交数据的名字
      label(for) + input(id)  为了盲人 (读屏器)
  - html5 版本中增强了威力
    placeholder
  - 表单是用来提交数据的
     dom form value + ajax 手动的提交
