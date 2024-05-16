// let arr = ['a', 'b', 'c', 'd'];
// // let a = arr[0];
// // let b = arr[1];
// // let c = arr[2];
// // let d = arr[3];
// let [a, b, c, d] = arr
// console.log(a,b,c,d);

// let arr1 = ['a', 'b',[ 'c', 'd']];
// let [a, b, [c, d]] = arr1
// console.log(a,b,c,d);

// let arr = [1, 2, 3, 4, 5, 6]
// // let [a, b, ...c] = arr//剩余的数组
// let [a, b, c, d, e, f = 100] = arr
// console.log(f);


// let obj = {
//     a: 1,
//     b: 2,
//     c: {
//         n: 3
//     }
// }
// // let foo = obj.a
// // console.log(foo);
// let {a, b, c, c: {n}} =obj;// 相当于let {a：a, b: b, c: {n: n}} =obj;
// console.log(a, b, c, c.n);


// let user = {
//     username: '阿美',
//     age: 18
// }
// // let {username: username,age: age} = user
// let {username,age} = user
// console.log(username,age);


// let b = 2
// let obj = {
//     a: 1,
//     b
// }
// console.log(obj.b);


let str = 'Hello'
let [a, b, c, ...d] = str
console.log(a,b,c,d);
