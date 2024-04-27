let arr = 'abcdedcba'

// function isPalindrome(str){
//     const len = str.length;
//     for(let i = 0;i < len / 2;i++){
//         if(str[i] !== str[len - 1 - i]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPalindrome(str));

function isPalindrome(str){
    let i = 0;
    let j = str.length - 1;

    while(i < j){
        if(arr[i] == arr[j]){
            i++;
            j--;
        }else{
            return false;
        }
    }
    return true;
}
console.log(isPalindrome(arr));
