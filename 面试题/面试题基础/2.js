// let a = 123
// let b = '123'
// let c = undefined
// let d = null // null转为二进制全是0
// 引用类型转为二进制前三位都是0

// console.log(typeof(d));

// console.log(a instanceof Number);

// let arr = []
// let obj = {}

// // console.log(arr instanceof Array);
// // console.log(obj instanceof Object);
// console.log(arr instanceof Object);

let a = 123
let b = {}

console.log(Object.prototype.toString.call(a));// '[object Number]'
console.log(Object.prototype.toString.call(b));// '[object Object]'