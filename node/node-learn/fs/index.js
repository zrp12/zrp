const { log } = require('console')
const fs = require('fs')

// const fileContent = fs.readFileSync('./text.txt')
// console.log(fileContent.toString());

// fs.writeFileSync('./readme.md', '天天快乐')


console.log(fs.statSync('./text.txt'));