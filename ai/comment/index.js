// 引入本地(在node_modules下) openai 依赖node-fetch等
// package.json  项目描述文件 dependencies
// 前端 + 后端 + AI
// OpenAI 类，require 关键字
// 系统环境变量
// 进程的环境变量
require('dotenv').config();
// console.log(process.env);

const OpenAI = require('openai');
// 实例化OpenAI
// options配置项
// AI全栈开发
// prompt -> GPT-API-free ->openai
const client = new OpenAI({
    // 收费：使用权限
    apikey: process.env.OPENAI_API_KEY,
    // proxy  chatanywhere代理
    baseURL: 'https://api.chatanywhere.tech/v1'
});

async function main(){
    // 做一些高下立判的事情， nlp 任务，
    // 根据用户发表的评论，正面/负面
    let prompt = `
      判断一下用户的评论情感上是正面的还是负面的
      评论：买的银色版真的好看，一天就到了，晚上就开始拿起来完系统很丝滑流畅，
      做工扎实，手感细腻，很精致，华为一如既往的好品质
      情感：正面
      评论：随意降价，不予保价，服务态度差
      情感：负面
    `

    let myPrompt = `
      ${prompt}
      评论：实话说，iphon越来越没有新意了，你买我不推荐，散了
      情感：

    `
    // client openai 实例
    // chat 是以聊天的方式
    // complentions AIGC openai帮助我们生成正面或者负面， LLM大模型来完成
    // AI 自然语言处理  GC  生成内容
    // create 创建应该对话
    const chatCompletion = await client.chat.completions.create({
        // 聊天的上下文  多轮
        // role 角色  user 用户向openai问问题  content
        messages: [{role: 'user', content: myPrompt}],
        // 选择相应的模型
        model: 'gpt-3.5-turbo',
        n: 1
    });
    console.log(chatCompletion.choices[0]);
}

main();


// const OpenAI = require('openai');
// require('dotenv').config()

// const client = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
//     baseURL: 'https://api.chatanywhere.tech/v1'
// });

// process.stdin.on('data', (buffer) => {
//     const comment = buffer.toString().trim();
//     async function main() {
        
//         let prompt = `
//         判断一下用户的评论情感上是正面的还是负面的
//         评论：买的银色版真的好看，一天就到了，晚上就开始拿起来完系统很丝滑流畅，
//         做工扎实，手感细腻，很精致，华为一如既往的好品质
//         情感：正面
//         评论：随意降价，不予保价，服务态度差
//         情感：负面
//     `

//         let myPrompt = `
//     ${prompt}
//     评论：${comment}
//     情感：
//     `
        
//         const chatCompletion = await client.chat.completions.create({
//             messages: [
//                 {
//                     role: 'user',
//                     content: myPrompt
//                 }],
//             model: 'gpt-3.5-turbo',
//             n: 1
//         })
//         console.log(chatCompletion.choices[0]);
//     }

//     main()
// })




// require('dotenv').config();
// const OpenAI = require('openai');
// const readline = require('readline');

// const client = new OpenAI({
//     apikey: process.env.OPENAI_API_KEY,
//     baseURL: 'https://api.chatanywhere.tech/v1'
// });

// async function getUserInput(prompt) {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     return new Promise((resolve) => {
//         rl.question(prompt, (answer) => {
//             rl.close();
//             resolve(answer);
//         });
//     });
// }

// async function main(){
//     const prompt = `
//       判断一下用户的评论情感上是正面的还是负面的
//       评论：买的银色版真的好看，一天就到了，晚上就开始拿起来完系统很丝滑流畅，
//       做工扎实，手感细腻，很精致，华为一如既往的好品质
//       情感：正面
//       评论：随意降价，不予保价，服务态度差
//       情感：负面
//     `;

//     let myPrompt = `
//       ${prompt}
      
//     `;

//     const userInput = await getUserInput("请输入您要评论的内容：\n");
//     myPrompt += `评论：${userInput}\n情感：`;

//     const chatCompletion = await client.chat.completions.create({
//         messages: [{role: 'user', content: myPrompt}],
//         model: 'gpt-3.5-turbo',
//         n: 2
//     });
//     console.log(chatCompletion.choices[0].message.content);
// }

// main();

