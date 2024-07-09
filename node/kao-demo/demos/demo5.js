const Koa = require('koa');
const app = new Koa(); 
const router = require('koa-route');

const logger = (ctx, next) => {
    console.log(`${ctx.url} ${ctx.method} ${Date.now()}`)
    next()
}
const main = (ctx) => {
    ctx.type = 'html'
    ctx.body = '<h2>首页</h2>'
}

const about = (ctx) => {
    ctx.type = 'html'
    ctx.body = '<a href="/">关于页面，点击去首页</a>'
}
app.use(logger)
app.use(router.get('/', main))
app.use(router.get('/about', about))

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
})