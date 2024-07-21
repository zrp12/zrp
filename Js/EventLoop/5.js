console.log('script start');// 第1个执行
async function async1() {
  await async2();// 等async2执行  await会将后续的代码阻塞进微任务队列
  console.log('async1 end');// 第一个进入微任务队列，第5个执行
}
async function async2() {
  console.log('async2 end');// 第2个执行
}
async1();
setTimeout(function() {
  console.log('setTimeout');// 进入宏任务队列，第8个执行
}, 0)
new Promise(function(resolve, reject) {
  console.log('promise');// 第3个执行
  resolve();
})
.then(() => {
  console.log('then1');// 第二个进入微任务队列，第6个执行
})
.then(() => {
  console.log('then2');// 第三个进入微任务队列，第7个执行
})
console.log('script end');// 第4个执行


