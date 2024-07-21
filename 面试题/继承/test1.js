function Test() {
    this.a = 1;
}
Test.prototype.b = [1, 2]

let obj = new Test()
obj.b.push(4)

console.log(obj.b);