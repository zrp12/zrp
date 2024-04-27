// function foo(a) {
//     console.log(a+b);
// }

// function bar(){
//     var b = 2;
// }

// bar();
// foo(1);

function foo(a){//foo有效标识符a,b,c,bar
    var b = 2;

    function bar(c){//bar有效标识符只有c
        console.log(a+b+c);
    }
    bar(3);
}
foo(1);