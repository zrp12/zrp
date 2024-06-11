const OpenAI = require('openai');
// AIGC 接口 擅长做的是生成内容
// 生成代码
const client = new OpenAI(
    {
        apiKey:'sk-hXS01A2ybNLOnxzdpsVRhOTjTsHciffwZ7ffhRgpq3kE5iRt',
        baseUrl: "https://api.cahtanywhere.tech/v1"
    }
)

// 立即执行函数
;(async () =>{
    // openai 容易出问题
    try {
        // chat聊天接口 completions完成 create
        const response = await client.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages:[
                {
                    role: 'system',
                    content: '假定你是一位专业的JavaScript工程师'
                },
                {
                    role: 'user',
                    content: `
                    请编写一个JavaScript函数curry实现柯里化
                    要求：函数名为curry
                    接受一个fn，以及余下的参数
                    如果接收到的参数数量达到fn需要的参数数量
                    则运行fn，并拿到返回结果
                    否则递归调用curry，继续接受参数
                    添加必要的注释，说明函数的功能
                    在函数末尾添加几个测试用例，并打印结果
                    `
                }
            ]
        })
        console.log(response.choices[0].message.content);
    }catch(err) {
        console.log(err);

    }
})()