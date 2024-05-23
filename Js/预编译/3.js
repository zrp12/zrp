// console.log(a);
// var a = 1;

// 声明提升 undefined
// var a;
// console.log(a);
// a = 1;

// test();
// function test(){
//     var a = 2;
//     console.log(a);
// }
// //函数提升
// function test(){
//     var a = 2;
//     console.log(a);
// }
// test();


// GO:{
//     a:undefined,
//     fn:function (a){
//         var a = 2;
//         function a(){}
//         console.log(a);
//     }
// }

var a = 1;
function fn(a){
    var a = 2;
    function a(){}
    console.log(a);
}
// AO:{
//     a: undefined undefined  3  function(){} 2
    
// }
fn(3);