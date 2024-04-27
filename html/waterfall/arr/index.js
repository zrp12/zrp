var arr = ['a',1,'b','hello'];
// arr.push(0);
// arr.shift();
// arr.pop();
// arr.unshift(23);
// arr.splice(1，2);//从哪一个下标删除，删几个值(移除数组上的任意值)
// arr.splice(3,0,true);//(从数组任意位置添加值) arr.splice(3,null,true);

// for(var i = 0;i < arr.length;i++){ //遍历
//     arr[i] = arr[i] + 1;
// }

// arr.forEach(function(item, i, arr){ //遍历数组
//     console.log(item);
//     arr[i] = item + 2;
//     // arr[i] = arr[i] + 2;
// });

// var index = arr.indexOf(10);//数组是否存在某个元素，返回下标，从左往右找,没有这个值返回-1
// var index = arr.lastIndexOf(1);//从右往左找
var has = arr.includes(1);//有返回true,没有返回false



console.log(has);