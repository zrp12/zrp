// node的全局global  global.gc()
global.gc();

// console.log(process.memoryUsage());

let obj = {name:'阿眉', age: new Array(5 * 1024 * 1024)};
let ws = new WeakSet();
ws.add(obj);

obj = null;// 回收obj

global.gc();

console.log(process.memoryUsage());