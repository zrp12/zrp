const { log } = require("console")

function A() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('异步A');
            resolve()
        },1000)
    })
}

function B() {
    console.log('同步B');
    // return 11
}
// A().then(B)

function* generator() {
    yield A() // yield暂停函数
    yield B()
}
let g = generator() // new generator()
console.log(g.next()); // { value: Promise { <pending> }, done: false }
console.log(g.next()); // { value: undefined, done: false }
// { value: Promise { <pending> }, done: false }
// 同步B
// { value: undefined, done: false }
// 异步A
console.log(g.next());
// { value: Promise { <pending> }, done: false }
// 同步B
// { value: undefined, done: false }
// { value: undefined, done: true } 
// 异步A