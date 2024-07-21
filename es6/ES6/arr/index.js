// var arr = [1,5,0,8,3,9,6]

// // arr.sort((a,b) =>{
// //     return a - b;
// // })
// arr.sort((a,b) => a - b);
// console.log(arr);


// var arr = [1, 5, 0, 8, 3, 9, 6]
// function bubbleSort(arr){
//     const len = arr.length;
//     for(var i = 0;i < len;i++){
//         for(var j = i + 1;j < len;j++){
//             if(arr[i] > arr[j]){
//                 arr[i] = arr[j];
//             }
//         }
//     }
// }
// bubbleSort(arr);
// console.log(arr);

// [arr[i],arr[j]] = [arr[j],arr[i]]


var arr = [1, 5, 0, 8, 3, 9, 6];

function bubbleSort(arr) {
    const len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                // 实际交换元素的位置
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

bubbleSort(arr);
console.log(arr); // 输出：[0, 1, 3, 5, 6, 8, 9]

