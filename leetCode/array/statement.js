//条件语句

//if(0 < 1){
   // console.log('123');
//}

// var i = 3;
// switch(i){
//     case 0:
//         console.log('0');
//         break;
//     case 1:
//         console.log('1');
//         break;    
//     case 3:
//         console.log('3');
//         break;  
//     default:
//         console.log('条件不满足');
//         break;      
//  }

//循环语句
var arr = [1,2,3,4,5];
for(let i = 0;i < arr.length; i++){
    arr[i] = arr[i]*10;
}
console.log(arr);

arr.indexOf();//判断数组里面是否有某个值,返回下标

let obj = {
    a:0,
    b:1
}

console.log(obj.a);
console.log(obj['a']);