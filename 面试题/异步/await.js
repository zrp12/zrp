function A() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('异步A');
            resolve()
        }, 2000)
    })
}

function B() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('异步B');
            resolve()
        }, 1000)
    })
}

async function foo() {
    await A()
    await B()
}
foo()