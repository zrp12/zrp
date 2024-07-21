const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path')

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url)
    if (reqUrl.pathname === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h2>hello world</h2>')
    }
    else if (req.method === 'POST' && reqUrl.pathname === '/login'){
        // 拿到前端传递的参数
        // 去数据库里面校验该参数合法性
        console.log(登录成功);       
    }
    else {
        const _url = path.resolve(__dirname, 'assets/404.html')       
        const content = fs.readFileSync(_url, {encoding: 'utf-8'})
        res.end(content)
    }
})

server.listen(3000, () => {
    console.log('Listening on port 3000');
})