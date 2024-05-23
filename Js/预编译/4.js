// GO:{
//     fn: function(){}
// }
// 全局执行
function fn(a){
    console.log(a);//function
    var a = 123;
    console.log(a);//123
    function a(){}
    console.log(a);//123
    var b = function(){};
    console.log(b);//function
    function c(){}
    var c = a;
    console.log(c);//123
}

// AO:{
//     a:undefined  1 function(){} 123,
//     b:undefined funtion(){},
//     c:undefined function(){}
// }
fn(1);