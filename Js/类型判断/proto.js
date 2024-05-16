function Foo(){

}

let f = new Foo();
// f._proto_ = Foo.prototype

let obj = {} // new Object()

// obj._proto_ = Object.prototype对象的隐式原型等于函数体的显式原型