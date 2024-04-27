// let str = 'cabac1'

// function isPalindrome(str){
//     let strArr = str.split('').reverse();
//     let Arr = strArr.join('')
//     if(str == Arr){
//         return true;
//     }
// }
// isPalindrome(str)


let num = 12100;
var isPalindrome = function(x) {
    // let a = x.toString();
    // let strArr = a.split('').reverse();
    // let Arr = strArr.join('');
    // return a == Arr ? true : false;
    // if(a == Arr){
    //    return true;
    // }else{
    //     return false;
    // }

    let a = x.toString().split('').reverse().join('');
    return a == x.toString() ? true : false;

};
console.log(isPalindrome(num));


