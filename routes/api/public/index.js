/**
 * 公用接口路由配置
 */

const routerPath = require('./routetPath')


module.exports = app => {

  app.post(routerPath.login, app.controller.user.login())

}