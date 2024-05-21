// 阶乘  5！

// function mul(n){
//     let res = 1;
//     for(let i = 2;i <= n;i++){
//         res *= i;
//     }
//     return res;
// }
// console.log(mul(5));// 120


function mul(n){
    if(n === 1 || n === 0) return 1;
    return n * mul(n-1);
}
console.log(mul(0));