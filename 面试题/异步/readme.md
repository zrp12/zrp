# 异步的发展
1. 回调 回头地狱 嵌套太深 代码维护，排查错误困难
2. promise
    - 拥有三种状态 pending fulfilled rejected
    - 实例化一个 promise 会得到一个状态为 pending 的实例对象
    - 该对象可以访问 promise 原型上的 then 方法
    - 当该对象中的状态没有变更为 fulfilled ，then 接收到的回调不会被调用
3. generator
    - generator 函数的执行返回一个Generator 对象，该对象包含一个next 方法
    - next 方法可以用来解除 yeild 封印，不断地调用next会让js引擎不断地执行下一个 yield
    - 哪怕 yeild A() 这个A有返回值，Generator 函数依然不采用这个返回值，Generator 函数只认自己下一个next传入的值

4. async/await 实现原理
    - Generator + Promise + co 
