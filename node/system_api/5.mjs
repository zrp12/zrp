import { log } from 'console'
import fs from 'fs'

// fs.writeFileSync('./newTest.txt', 'newTest')

// status
try{
    console.log(fs.statSync('./newTest.txt')); // 状态信息
}catch(err) {
    console.log('文件不存在');
}
