console.log(1);// 第1个执行
new Promise((resolve, reject) => {
  console.log(2);// 第2个执行
  resolve()
})
.then(() => {
  console.log(3);// 进微任务队列 第4个执行
  setTimeout(() => {
    console.log(4);// set1第二个进宏任务队列 第6个执行
  }, 0)
})
setTimeout(() => {
  console.log(5);// set2第一个进宏任务队列 第5个执行
  setTimeout(() => {
    console.log(6);// set3第三个进宏任务队列 第7个执行
  }, 0)
}, 0)
console.log(7);// 第3个执行




