function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a is ok')
            // reject(2)
            resolve(14) // .then逻辑不会执行
        }, 1000)
    })
    
}

function b() {
    console.log('b is ok')  
}
// a().then(b)
a().then((res) => {
    console.log(res);
    b()
})
.catch(err => {
    console.log(err);
})
