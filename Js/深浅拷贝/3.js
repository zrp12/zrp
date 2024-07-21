let obj = {
    name: '昔年',
    age: 18,
    like: {
        n: 'coding'
    },
    a: true,
    b: undefined,
    c: null,
    d: Symbol(1),
    f: function(){}
}
// obj.c = obj.like;
// obj.like.m = obj.c;//循环引用

let obj2 = JSON.parse(JSON.stringify(obj));
// obj.like.n = 'running';

console.log(obj2);
