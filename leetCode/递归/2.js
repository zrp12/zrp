// 斐波那契数列 1 1 2 3 5 8 13 21 34 55 89 144...

function fib(n) {
  if(n === 0 || n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(9)); // 55


// function fib(num){
//   if(num === 0 || num ===1) return 1;
//   return fib(num-1) + fib(num-2);
// }
// console.log(fib(8));