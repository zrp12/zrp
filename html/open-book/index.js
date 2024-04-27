//鼠标的摁住事件
//鼠标移动事件
var hold = false;
var page = document.querySelector('.front-cover');//左半本书
var pic = document.querySelector('.pic');
var shadow = document.querySelector('.shadow');
var clamp = function(val,min,max){
    // return Math.min(val,max);
    return Math.max(min,Math.min(val,max))
}

page.onmousedown = function(){
    hold = true;
}
window.onmouseup = function(){
    hold = false;
}

window.onmousemove = function(e){//摁住才能执行
    if(hold == true){
        // console.log(e.pageX);
        var angle = clamp((window.innerWidth / 2 - e.pageX + 300) / 300 * -90,-180,0);

        page.style.transform = `rotateY(${angle}deg)`;
        pic.style.transform = `rotateX(${angle / 2}deg)`;
        shadow.style.transform = `skewX(${angle / 8}deg)`;

        // pic 要立起来 绕X轴旋转 angle/2
        //shadow 要倾斜 angle/8


    }
}