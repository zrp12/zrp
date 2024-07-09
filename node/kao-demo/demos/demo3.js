const Koa = require('koa');
const app = new Koa(); 
const fs = require('fs');  

const main = (ctx) => {
    // ctx.response.type = 'html';
    // const context = fs.readFileSync('./template.html', 'utf-8') //.toString()
    // ctx.body = context

    ctx.type = 'html';
    const content = fs.createReadStream('./template.html')
    // console.log(content);
    ctx.body = content
   
}
app.use(main)

app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
})