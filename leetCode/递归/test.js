// let arr = [1, 2];
// let arr2 = [1, 3];
//  let allArr = arr.concat(arr2);
// let allArr = [...arr,...arr2]
//  console.log(allArr);

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let allArr = [...arr1, ...arr2]; // allArr 现在是 [1, 2, 3, 4]
// console.log(allArr);


let arr = [1, 2, [3, 4, [5, 6]]];
let arr1 = [1, 2, 3, 4, [5, 6]];
let [a, b, ...c] = arr;
// console.log(a, b, c);
console.log(...arr);
console.log(...arr1);
console.log([].concat(...arr));
console.log([].concat(...arr1));


// let arr = [1, 2, 3, 4, 5, 6, 7];
// let sum = arr.reduce((pre, item, index, arr) => {
//   return pre + item;
// },0)
// console.log(sum);


// let arr = [1, 2, 3, 4, 5];
// let res = arr.some(item => {
//     return item > 4;    
// })
// console.log(res);