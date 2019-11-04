const views = require('../controller/views')
//配置页面访问路由


// 验证是否登录中间件
const loginCheck = require('./middleware/loginCheck')


module.exports = router => {

  router.get('/', loginCheck(), views.index())

  router.get('/login', views.login())

  return router
}