let obj = {name: '西西里'};
// let ws = new WeakSet();
// ws.add(obj);
// obj = null;// 垃圾回收站会回收
// console.log(ws);

let aname = obj.name;
obj = null;
console.log(aname);