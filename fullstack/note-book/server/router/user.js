const router = require('koa-router')();

router.prefix('/user') // 路由前缀

router.post('/login', (ctx) => {
    // 获取到前端传递的账号密码，去数据库中校验
    const { username, password } = ctx.request.body
    
})

module.exports = router