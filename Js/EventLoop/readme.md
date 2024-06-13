# 事件循环机制
- 同步代码(不耗时)
    不耗时执行的代码

- 异步代码(耗时)
    需要耗时执行的代码

    - 微任务：promise.then(),  process.nextTick(),  MutationOvserver()

    - 宏任务: script, setTimeOut, setInterval, setImmediate, Input/Ouput, UI-rendering


# 进程和线程
- 进程：CPU运行指令和保存上下文所需的时间
- 线程：执行一段指令需要的时间

比如：一个浏览器的tab页面
1. 渲染线程
2. js引擎线程
3. http线程

js的加载是会阻塞页面的渲染的，渲染线程和js引擎线程是不能同时工作的

# js的单线程
v8在执行js的过程中只有一个线程会工作
1. 节约性能(运行内存)
2. 