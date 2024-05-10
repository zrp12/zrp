// function foo(){
//     var a = 1;
// }
// foo();
// console.log(a);

// var a = 1;
// function foo(){
//     console.log(a);
// }
// foo();


var b;
function foo(a){
    b = a + bar(a * 2);
    console.log(b * 3);
}
function bar(a){
    return a - 1;
}
foo(2);


// function foo(a){//函数的封装
//     var b;

//     function bar (a){
//         return a - 1;
//     }
//     b = a + bar(a * 2);
//     console.log(b * 3);
// }
// foo(2);