//路由配置
const page_router = require('./page_routes')
const api_user = require('./api/user_api/index')

module.exports = (app,router) => {

  app.use(page_router(router))

  app.use('/api/user/*', api_user(router))

};