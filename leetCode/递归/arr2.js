const arr = [1, 2, [3, 4, [5, 6]]];// 使用递归

function flatten(arr) {
   let res = []; // [1,2]  [3,4]  [5]
   for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
        // flatten(arr[i]);
        // res = res.concat(flatten(arr[i]));
        res = [...res,...flatten(arr[i])];
        
    }else{
        res.push(arr[i]);
    }
   }
   return res;
}

const newArr = flatten(arr);
console.log(newArr);