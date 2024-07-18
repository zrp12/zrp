function A(callback) {
    setTimeout(() => {
        console.log('异步A');
        callback()
    },1000)
}

function B(callback) {
    setTimeout(() => {
        console.log('异步B');
        callback()
    },500)
}

function C(callback) {
    setTimeout(() => {
        console.log('异步C');
        callback()
    },100)
}
// 延迟执行函数
function simpleThunk(fn) {
    return function(callback) {
        fn(function() {
            callback(fn)
        })
    }
}

function* exampleGen () {
    yield simpleThunk(A)
    yield simpleThunk(B)
    yield simpleThunk(C)
}

// Thunk函数自动执行器
function run(generatorFunction) {
    const g = generatorFunction()

    function iterate(g) {
        const {value, done} = g.next()  
        if (done) return
        if (typeof value === 'function') {
            // 就是Thunk函数
            value(() => {
                iterate(g)
            })
        } else {
            return
        }
    }

    iterate(g)
}

run(exampleGen)
