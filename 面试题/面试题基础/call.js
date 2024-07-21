let obj = {
    a: 1
}
// var a = 2
const a = 2

function foo() {
    console.log(this.a);
}
foo.call(obj)// 显示绑定