function a(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            console.log('a is ok');
            // resolve('a');
            reject('a');
        },1000)
    })
}
function b() {
    console.log('b is ok');
}

a().then(b)
.catch((err) => {
    console.log(err);
})

// a().then((res) => {
//     b();
// })