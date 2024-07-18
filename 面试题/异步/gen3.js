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
    yield A() 
    yield B()
}
let g = gen() 

g.next().value.then(() => {
    g.next()
})

