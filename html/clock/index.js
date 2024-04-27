// 获取秒针
// 设置秒针旋转的角度

var secondHand = document.querySelector('.second-hand');
var minHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');

function setTime(){
    var now = new Date();//获取当前的时间

    //读取秒
    var seconds = now.getSeconds();
    var secondsDegress = seconds * 6 + 90;
    secondHand.style.transform = `rotate(${secondsDegress}deg)`;

    var mins = now.getMinutes();
    var minsDegress = mins * 6 + 90;
    minHand.style.transform = `rotate(${minsDegress}deg)`;

    var hours = now.getHours();
    var hoursDegress = hours *30+ 90 + (mins/60)*30;
    hourHand.style.transform = `rotate(${hoursDegress}deg)`;
}
setTime();
// 定时器
setInterval(setTime,1000);