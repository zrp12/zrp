class MyPromise{
    constructor(executor) {
        this.state = 'pending'
        this.value = undefined // 临时存储 resolve 的参数
        this.reason = undefined // 临时存储 reject 的参数
        this.onFulfilledCallbacks = [] // 装then中的回调函数
        this.onRejectedCallbacks = [] // 装catch中的回调函数
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value
                this.onFulfilledCallbacks.forEach(fn => fn(value))
            }
        }

        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = reason
                this.onRejectedCallbacks.forEach(fn => fn(reason))
            }
        }   

        executor(resolve, reject)
    }
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }

        
        return new MyPromise((resolve, reject) => {
            if (this.state === 'fulfilled') { // then前面函数已经彻底执行了
                // const res = onFulfilled()
                // resolve(res)
                setTimeout(() => { // 模拟异步，但是模拟不了微任务
                    try {
                        const res = onFulfilled(this.value)
                        resolve(res)
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
               
            }
            if (this.state ==='rejected') {
                setTimeout(() => { // 模拟异步，但是模拟不了微任务
                    try {
                        const res = onRejected(this.reason)
                        resolve(res)
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            }

            if (this.state === 'pending') {
                // 将自己的回调存进 onfulfilledCallbacks 
                this.onFulfilledCallbacks.push((value) => {
                    setTimeout(() => { // 模拟异步，但是模拟不了微任务
                        onFulfilled(value)
                    }, 0)
                })
                this.onRejectedCallbacks.push((reason) => {
                    setTimeout(() => { // 模拟异步，但是模拟不了微任务
                        onRejected(reason)
                    }, 0)
                })
            }
        })
    }
}

new MyPromise((resolve, reject) => {
    resolve()
    // reject()
})
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
})