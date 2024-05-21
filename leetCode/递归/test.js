// let arr = [1, 2];
// let arr2 = [1, 3];
//  let allArr = arr.concat(arr2);
// let allArr = [...arr,...arr2]
//  console.log(allArr);


// let arr3 = [1, 2, 3, 4, 5, 6];
// let [a, b, ...c] = arr3;
// console.log(a, b, c);
// console.log(...arr3);


// let arr = [1, 2, 3, 4, 5, 6, 7];

// let sum = arr.reduce((pre, item, index, arr) => {
// //   console.log(pre, item, index);
//   return pre + item;
// }, 0)
// console.log(sum);


let arr = [1, 2, 3, 4, 5];
let res = arr.some(item => {
    return item > 4;    
})
console.log(res);