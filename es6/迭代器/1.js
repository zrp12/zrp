const colors = ['red', 'green', 'blue', 'pink', 'green'];

// const arr = [];
// for (var i = 0; i < colors.length;i++) {
//     for (var j = i + 1; j < colors.length; j++) {
//         if (colors[j] === colors[i]){
//             break;
//         }
//     }
//     if (j === colors.length) {
//         arr.push(colors[i]);
//     }
// }
// console.log(arr);


for (let item of colors) { // 取数组中的值(遍历可迭代的数据结构)
    console.log(item);
}