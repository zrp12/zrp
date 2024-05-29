function xq(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('徐总相亲了');
        resolve('相亲成功');
    },2000)
    })
}

function marry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log('徐总结婚了');
        resolve('新婚快乐');
    },1000)
    })
    
}

function baby() {
    console.log('小徐出生了');
}

xq()
.then((res) => {
    console.log(res);
    return marry();
})
.then((res2) => {
    console.log(res2);
    baby();
})


// xq().then(() => {
//     marry().then(() =>{
//         baby();
//     });
    
// });
