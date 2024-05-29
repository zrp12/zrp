# 异步
js是单线程执行的，一次只能干一件事

遇到需要耗时的代码，那就先挂起，先执行不耗时的代码，等到不耗时的代码执行完了，
v8腾出手了，再来执行耗时代码
# 同步


# 回调函数
- 嵌套过深，一旦出现问题很难排查

# promise
1. then( (res) => {}) res 是 promise 中 resolve(xx) 出来的值
2. catch( (err) => {}) err 是 promise 中 reject(xx) 出来的值
