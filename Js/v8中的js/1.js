// showName();
// console.log(Myname);
// var Myname = '阿瑶';
// function showName(){
//     console.log('函数showName被执行');
// }

// 在v8中执行成
// var Myname = undefined;
// function showName(){
//     console.log('函数showName被执行');
// }
// showName();
// console.log(Myname);
// var Myname;


function foo(){
    console.log('foo');
}
//函数声明
// 相当于
// function foo = function (){
//     console.log('foo');
// }


var bar = function(){
    console.log('bar');
}
//函数表达式
// var bar = undefined;
// bar = function(){
//     console.log('bar');
// }