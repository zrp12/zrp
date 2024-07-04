const { log } = require('console');
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path')

const data = {
    id: 1,
    name: 'rp',
    age: '18'
}

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url)
    if (reqUrl.pathname === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h2>hello world</h2>')
    }else if(reqUrl.pathname === '/user'){
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(data))
    }else if (req.method === 'POST' && reqUrl.pathname === '/login'){
        // 拿到前端传递的参数j
        // 去数据库里面校验该参数合法性
        console.log(登录成功);
        // console.log(__dirname);
        
    }
    else {
        const _url = path.resolve(__dirname, 'assets/404.html')
         
        const content = fs.readFileSync(_url, {encoding: 'utf-8'})
        res.end(content)
        // console.log(content);
    }
})

server.listen(3000, () => {
    console.log('Listening on port 3000');
})