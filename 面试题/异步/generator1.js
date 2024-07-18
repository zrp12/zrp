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
}


function* generator() {
    let a = yield A() // yield暂停函数
    console.log(a, '111111');
    yield B()
}
let g = generator() // new generator()

// console.log(g.next()); 
// console.log(g.next()); 

g.next()
// 如果我能控制第二个next的执行是发生在第一个next所带来的
// 异步函数执行完毕后，才调用，我就能先执行异步在执行同步
setTimeout(() => { 
    g.next() 
}, 2000)
