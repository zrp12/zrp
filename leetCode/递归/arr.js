// const arr = [1, 2, [3, 4, [5,[6,[7,[8]]]]]];// 多维数组  数组的扁平化 变为一维数组

// const newArr = arr.flat(Infinity);

// console.log(newArr);

let arr = [1, 2, [3, 4, [5, 6]]];
let newArr = arr.flat(2); // 默认情况下，只展开一层
console.log(newArr); // 输出: [1, 2, 3, 4, [5, 6]]

// 指定深度
let Arr = arr.flat(Infinity);
console.log(Arr); // 输出: [1, 2, 3, 4, 5, 6]