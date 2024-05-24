const arr = [1, 2, [3, 4, [5, 6]]];

// function flatten(arr){
//     while(arr.some(item => Array.isArray(item))){
//         arr = [].concat(...arr); // [].concat(1, 2, [3, 4, [5]])  //[].concat(1, 2, 3, 4, [5])
//     }
//     return arr;
// }

function flatten(arr){
    while(arr.some(item => {
        Array.isArray(item);
    })){
        arr = [].concat(...arr);
    }
    return arr;
}


console.log(flatten(arr));
