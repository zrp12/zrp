function a(){
    function b(){
        var b = 22;    
        console.log(a);
    }
    var a = 111;
    b();

}
var glob = 100;
a();

// 1.a的定义 a.[[scope]] ---> 0: GO{} 在a的作用域一定可以访问GO全局
// a的执行   a.[[scope]] ---> 0: aAO{}  1: GO{}
//GO global object  AO activation object

// 作用域链