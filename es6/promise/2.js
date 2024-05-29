let data = {};
function a(){
    setTimeout(() => { //ajax
        data = {name: '阿美'};
        b();
    },1000)
}

function b(){
    console.log(data.name + '好看');
}

a();
// b();