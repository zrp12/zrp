// 先把不耗时的代码走完
let a = 1;
console.log(a); // 1

setTimeout(function() { // 耗时，先跳过
    // a++;
    let b = 2;
    console.log(b);
    a++;
    setTimeout(function () {
        b++;
    },2000)
    console.log(b);
},1000)

console.log(a); // 1

function bar() {
    console.log('bar');
}
bar();