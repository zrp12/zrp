// function add(a,b){
//     if(typeof(a) === 'number' && typeof b === 'number'){//typeOf类型判断
//         return a + b;
//     }  
//     console.log('参数类型不对');
// }
// add('1', 2)



function isObject(o){
    if(typeof(o) === 'Object' && o !== null){
        return true;
    }
    return false

}
let res = isObject(null)
console.log(res);