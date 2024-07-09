const Koa = require('koa');

const app = new Koa();   

const main = (ctx) => {
    // console.log(ctx);
    // ctx.res.end('hello world');
    // ctx.response.body = 'hello koa';
    console.log(ctx.url);
    ctx.body = 'hello koa!!';
}
app.use(main)

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
})