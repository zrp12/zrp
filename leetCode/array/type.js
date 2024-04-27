var str = 'hello world';// 声明一个变量 String类型
var n = 123;//Number类型
var flag = false || true; //Boolean
var u = undefined;
var nu = null;

//引用类型 对象
var obj = {
    name:'',
    a:1,
    b:'abc'
}
obj.c=2;

//数组
// var arr =[1,'a',false,{b:2},[3,4]];
var arr = [];
arr.push('hello');//推入
arr.unshift(123);//从最前面加入
arr.pop();//从尾部删除
arr.shift();//头部删除

console.log(arr);