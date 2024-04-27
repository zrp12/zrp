//获取用户屏幕宽度,决定了一行能放下几张图
//操作下一张图片,放到上一行最矮的列下面

imgLocation('container', 'box');// 声明,实参

function imgLocation(parent, content) {
    // 有多少张图
    var cparent = document.getElementById(parent);
    // var ccontent = document.querySelectorAll('#container .box');//获取20个box
    var ccontent = getChildElement(cparent,content);//获取有几个盒子
    //每一个box的宽度
    var imgWidth = ccontent[0].offsetWidth;//获取宽度
    var num = Math.floor(document.documentElement.clientWidth / imgWidth);//一行放几张
    cparent.style.width = `${imgWidth * num}px`;

    //要操作的是哪一张，每一列的高度
    var  BoxHeightArr = [];//所有box的高度
    for (var i = 0;i < ccontent.length; i++){
        if (i < num){//第一行
            BoxHeightArr[i] = ccontent[i].offsetHeight;
        }else {//要操作的
            var minHeight = Math.min.apply(null, BoxHeightArr);//最小高度
            var minIndex = BoxHeightArr.indexOf(minHeight);

            //摆放图片的位置
            ccontent[i].style.position = 'absolute';
            ccontent[i].style.top = minHeight + 'px';
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px';

            //更新这一列的高度
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + ccontent[i].offsetHeight;
        }
    }
}

function getChildElement(parent, child) {//辅助函数
    //获取parent中所有的child
    var childArr = [];
    var allChild = parent.getElementsByTagName('*');//选中parent中的所有标签
    //挑出来所有的box
    for (var i = 0; i < allChild.length; i++){
        if (allChild[i].className == child) {
            childArr.push(allChild[i]);
        }
    }
    return childArr;
}    
