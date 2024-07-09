const Koa = require('koa');

const app = new Koa();   

const main = (ctx) => {
    if (ctx.request.accepts('html')){
        ctx.body = '<data>Hello Koa1</data>'
    } else if (ctx.request.accepts('json')){
        ctx.body = {data: 'Hello Koa2'}
    } else {
        ctx.body = 'Hello Koa3'
    }
}
app.use(main)

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
})