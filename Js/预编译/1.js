let a = {
    age: 23,
}

function test() {
}

//  test.[[scope]]    作用域属性，给js引擎访问的，我们拿不到---隐式属性

// test()  --->  AO: {}  //回收，再次调用又会创建AO对象