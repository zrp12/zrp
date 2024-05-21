const arr = [1, 2, [3, 4, [5,[6,[7,[8]]]]]];// 多维数组  数组的扁平化 变为一维数组

const newArr = arr.flat(Infinity);

console.log(newArr);