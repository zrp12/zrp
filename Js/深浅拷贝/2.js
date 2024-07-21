// let a = {
//     name : '阿年'
// }
// let b = Object.create(a);// 创建一个新的对象，隐式继承原对象
// a.name = '阿美';
// console.log(b.name);// 浅拷贝

// let a = {
//     name : '毛毛'
// }
// let b = {
//     age : 18
// }
// let c = Object.assign(a,b);// 会影响a
// console.log(a);

// let a = {
//     name : '毛毛'
// }
// let c = Object.assign({},a);// 会影响a
// console.log(c);


// let a = {
//     name : '毛毛',
//     like:{
//         n: running
//     }
// }
// let c = Object.assign({},a);
// // a.name = '小美';
// a.like.n = 'swimming';
// console.log(c);



let arr = [1, 2, 3,{a: 10}];
let newArr = [].concat(arr);// 将arr中的元素合并到[]中，并返回一个新数组

// arr.splice(1,2)//得到数组，浅拷贝
// arr[1] = 20;
arr[3].a = 100;
console.log(newArr);