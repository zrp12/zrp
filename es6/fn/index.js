// 不确定函数要接收多少个实参
function foo(a,...ar){
    // console.log(arguments[0]);
    console.log(a,ar);
}
foo(1, 2, 3);