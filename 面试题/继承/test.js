function Test() {
    this.a = 1;
}
Test.prototype.b = 2

let obj = new Test()
obj.b = 3

console.log(obj.b);