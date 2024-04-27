let arr = [1,2,3,4,5,6];

// for(let i = 0; i < arr.length;i++){
//     if(arr[i] < 4){
//         arr[i] = arr[i] * 10;
//     }
// }
// console.log(arr);
  let i = 0;
while(arr[i] < 4){
    arr[i] = arr[i] * 10;
    i++;
}
console.log(arr);