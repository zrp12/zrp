const Koa = require('koa')
const app = new Koa()
const router = require('./router/user.js')

// const main = (ctx) => {
//     ctx.body = 'Hello world'
// }
// app.use(main)
app.use(router.routes()) // 让路由生效

app.listen(3001, () => {
    console.log('项目已经启动');
})