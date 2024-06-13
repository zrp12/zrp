// console.log(1);// 1
// new Promise((resolve, reject) => {
//     console.log(2);// 2
//     resolve();
// })
// .then(() => {
//     console.log(3);// 4
// })
// .then(() => {
//     console.log(4);// 5
// })
// setTimeout(() => {
//     console.log(5);// 6
// })
// console.log(6);// 3


console.log(1);// 1
new Promise((resolve, reject) => {
  console.log(2);// 2
  resolve()
})
.then(() => {
  console.log(3);// 4
  setTimeout(() => {
    console.log(4);// 6
  }, 0)
})
setTimeout(() => {
  console.log(5);// 5
  setTimeout(() => {
    console.log(6);// 7
  }, 0)
}, 0)
console.log(7);// 3