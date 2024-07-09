const Koa = require('koa');
const app = new Koa(); 

const one = (ctx, next) => { // 中间件
    console.log(1);
    next();
    console.log(2);
}

const two = (ctx, next) => {
    console.log(3);
    next();
    console.log(4);
}

const three = (ctx) => {
    console.log(5);
    console.log(6);
}

// 洋葱模型
app.use(one)
app.use(two)
app.use(three)

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
})