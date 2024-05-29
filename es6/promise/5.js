function a(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log('a is ok');
            resolve('a');
        },1000)
    })
}
function b() {
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log('b is ok');
            resolve('b');
        },2000)
    })
}

function c() {
    console.log('c is ok');
}

// Promise.race([a(), b()]).then(() => {
//     c();
// })

Promise.all([a(), b()]).then(() => {
    c();
})
