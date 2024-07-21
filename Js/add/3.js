// 参数不定？
// 柯里化， 闭包的使用场景

// 箭头函数 简约 es6
// 解构 ...rest运算符
// const curry = function (fn) {
//     // arguments 参数对象
//     for (let i = 0; i < arguments.length; i++){
//         console.log(arguments[i]);
//     }
//     // console.log(args);
// }
const curry = (fn, ...args) => {
    console.log(args);
}
function add(x, y, z, m){
    return x + y + z + m;
}

// add(1)(2)(3)(4);

console.log(curry(add, 1, 2, 3));