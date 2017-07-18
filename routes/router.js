//路由配置

const page_router = require('./page')
const api_public = require('./api/public/index')
const api_private = require('./api/private/index')

module.exports = app => {

  // 配置页面访问路由
  page_router(app)

  // 配置公用接口路由
  api_public(app)

  // 配置私有接口路由
  api_private(app)

};