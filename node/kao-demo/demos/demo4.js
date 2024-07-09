const Koa = require('koa');
const app = new Koa(); 

const main = (ctx) => {
   if (ctx.url === '/') {
    ctx.type = 'html'
    ctx.body = '<h2>首页</h2>'
   }else {
    ctx.type = 'html'
    ctx.body = '<a href="/">去首页</a>'      
   }
}
app.use(main)

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
})