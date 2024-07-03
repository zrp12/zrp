const express = require('express')

const app = express()
const port = 3000

app.get('/',(req, res) => {
    res.send('Welcome to node')
})

app.listen(port , () => {
    console.log('项目已启动在3000端口');
})