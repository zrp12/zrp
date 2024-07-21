let count = 0;

function a(){
    setTimeout (() => {
        count++;
    },1000)
}

function b() {
    console.log(count);// 0
}
a();
b();