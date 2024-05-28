// var [a, b] = [1, 2];
// console.log(a, b);
// var {aname, age} = {aname: 'John', age: 18};
// console.log(aname, age);


Object.prototype[Symbol.iterator] = function(){
    return Object.values(this)[Symbol.iterator]();// 返回可迭代的对象
}
var [a, b] = {a: 1, b: 2}; // new Object()

console.log(a, b);
