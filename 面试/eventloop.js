async function m1() {
    return 1 + '-----';
}

async function m2() {
    const n = await m1();
    console.log(n, '@');
    return 2;
}

async function m3() {
    const n = m2(); // 注意这里没有使用await
    console.log(n, '22222'); 
    return 3;
}

m3().then((n) => {
    console.log(n, '33333');
});

m3();

console.log(4);
// 输出：Promise { <pending> } // 这里输出的是一个 pending 的 Promise 对象
// 输出：Promise { <pending> }
// 输出：4
// 输出：1
// 输出：3
// 输出：1