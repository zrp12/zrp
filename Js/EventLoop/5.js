console.log('script start');// 1

async function async1() {
  await async2();// 等async2执行  await会将后续的代码阻塞进微任务队列
  console.log('async1 end');// 5
}
async function async2() {
  console.log('async2 end');// 2
}
async1();
setTimeout(function() {
  console.log('setTimeout');// 8
}, 0)
new Promise(function(resolve, reject) {
  console.log('promise');// 3
  resolve();
})
.then(() => {
  console.log('then1');// 6
})
.then(() => {
  console.log('then2');// 7
})
console.log('script end');// 4