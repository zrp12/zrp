function bar() {
    console.log(myName);
}

function foo () {
    var myName = 'Tom'
    bar()
}
var myName = 'Jerry'
foo()