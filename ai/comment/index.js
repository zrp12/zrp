// 引入本地(在node_modules下) openai 依赖node-fetch等
// package.json  项目描述文件 dependencies
// 前端 + 后端 + AI
// OpenAI 类，require 关键字
const OpenAI = require('openai');
// 实例化OpenAI
// options配置项
// AI全栈开发
// prompt -> GPT-API-free ->openai
const client = new OpenAI({
    // 收费：使用权限
    api_key: 'sk-H1uBBIhm1sUWCvnviNnjqFXv1DD6udBOxT7NxAXrkt7NgP6h',
    // proxy  chatanywhere代理
    baseURL: 'https://api.chatanywhere.tech/v1'
});