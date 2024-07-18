function* exampleGen() {
    const result1 = yield Promise.resolve(1);
    const result2 = yield Promise.resolve(2);
    return result1 + result2;
}

// 自动化执行g.next()
function co(generatorFunction) {
    return new Promise((resolve, reject) => {
        const g = generatorFunction();
        function next(value) {
            const {value: result, done} = g.next(value)

            if (done) {
                resolve(result)
            } else {
                // 遇到了yelid，就执行promise
                Promise.resolve(result)
                .then(next) // 递归
            }
        }
        next()
    });
}

co(exampleGen)
.then(res => {
    console.log(res);
})