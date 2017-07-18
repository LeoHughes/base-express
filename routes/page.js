//配置页面访问路由



// 验证是否登录中间件
const loginCheck = require('./middleware/loginCheck')


module.exports = app => {

  app.get('/', app.controller.page.index())

  app.get('/login', app.controller.page.login())

  app.get('/imgCode', app.controller.page.imgCode())

}