// // 只有一句代码，是返回值本身
// const curry = (fn, ...args) => 
//     // console.log(args.length, fn.length);
//     args.length >= fn.length ? fn(...args) : (..._args) => curry(fn, ...args, ..._args)

// // 原函数add
// // 柯里化 慢慢收集
// const add = (x, y, z, m) => {
//     return x + y + z + m;
// }

// // const curryAdd = curry(add, 1);
// console.log(curry(add, 2)(2)(3, 6));


// function sum(...numbers) {
//     return numbers.reduce((a, b) => a + b, 0);
// }
// sum(1, 2, 3, 4); // 返回10

function sum(...numbers) {
    let total = 0;
    numbers.forEach(num => total += num);
    return total;
}
sum(1, 2, 3, 4); // 返回10

// 解构赋值中的Rest
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others); // 输出 [3, 4, 5]