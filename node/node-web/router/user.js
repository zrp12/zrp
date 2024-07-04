const router = require('koa-router')()

router.get('/user', (ctx) => {
    ctx.body = {
        name: 'rp',
        sex: 'girl'
    }
})

router.get('/home', (ctx) => {
    ctx.body = 'this is my home'
})

module.exports = router