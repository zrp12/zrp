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


function* gen() {
    let a = yield A() // 123
    console.log(a, '-----');
    yield B()
}
let g = gen() 

g.next()
g.next(123)
