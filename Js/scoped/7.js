// function foo(str,a){
//     eval(str);//把字符串转化为代码
//     console.log(a,b);
// }
// var b = 2;
// foo('var b = 3',1);


// var obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// // obj.a = 4;
// with (obj){
//     a = 3;
//     b = 4;
//     c = 5;
// }
// console.log(obj);


function foo(obj){
    with(obj){
        a = 2;
    }
}

var o1 ={
    a: 3
}
var o2 ={
    b: 3
}
// foo(o1);
// console.log(o1);
foo(o2);
console.log(a);