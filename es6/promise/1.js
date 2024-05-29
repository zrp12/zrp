function foo(){
    setTimeout(() => {
        console.log('1');
    },1000)
}

function bar() {
    console.log('2');
}
foo();
bar();