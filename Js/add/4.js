// 只有一句代码，是返回值本身
const curry = (fn, ...args) => 
    // console.log(args.length, fn.length);
    args.length >= fn.length
    ? fn(...args)
    : (..._args) => curry(fn, ...args, ..._args)

// 原函数add
// 柯里化 慢慢收集
const add = (x, y, z, m) => {
    return x + y + z + m;
}

// const curryAdd = curry(add, 1);
console.log(curry(add, 2)(2)(3, 4));