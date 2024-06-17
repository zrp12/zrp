// console.log('123');
// 对文件系统中的hello.txt读取
// node 内置模块
// 模块化系统 require 关键字 commonJS模块
const { log } = require('console')
const fs = require('fs')// 文件系统模块
// js 是单线程语言
// 代码读入内存运行
// hello.txt 在硬盘里面 慢
// 异步任务 事件，定时器  ajax, ...耗时任务

const fsPromise = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./hello.txt', 'utf-8', (err, data) => {
            if(err){
                reject(err);
            }else {
                resolve(data);
            }
        })
    })
}
fsPromise().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})