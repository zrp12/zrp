//自执行函数 （立即执行函数）

// var a = 2;
// (function(){
//     var a = 3;
//     console.log(a);
// })();

var a = 2;
!function(){
    console.log(a);
}();
