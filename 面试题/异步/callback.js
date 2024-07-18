function a() {
    setTimeout(() => {
        console.log('a is ok')
        b()
    }, 1000)
}

function b() {
    console.log('b is ok')  
}
a()
// b()