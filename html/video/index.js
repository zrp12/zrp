//获取白底容器
//在白色容器上监听鼠标的移动事件
//获取到鼠标移动的距离
//根据鼠标移动的距离来设计彩色容器的高度
//拿到鼠标移动的坐标

var speed = document.querySelector('.speed');//定义变量
var speedBar = document.querySelector('.speed-bar');
var video = document.querySelector('.video');


speed.addEventListener('mousemove',function(e){
    var y = e.pageY-speed.getBoundingClientRect().top;//获取容器到浏览器顶部的距离
    var percent = y / speed.offsetHeight;
    var height = Math.round(percent*100)+'%';//四舍五入
    //用JS修改speed-bar容器的高度
    speedBar.style.height = height;
    var min = 0.4;
    var max = 4;
    var palySpeed = percent *(max - min) + min;
    speedBar.textContent = palySpeed.toFixed(2) + 'x';
    video.playbackRate = palySpeed;
});//监听