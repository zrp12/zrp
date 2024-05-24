const arr = [1, 2, [3, 4, [5, 6]]];

// function flatten(arr){
//     return arr.reduce((pre,item) => {
//         return pre.concat(Array.isArray(item) ? flatten(item) : item)
//     },[])
// }

function flatten(arr){
    return arr.reduce(function(pre,item){
        if(Array.isArray(item)){
            return pre.concat(flatten(item));
        }else{
            return pre.concat(item);
        }
    },[])
}
console.log(flatten(arr));