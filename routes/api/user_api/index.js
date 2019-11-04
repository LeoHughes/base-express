const routerPath = require('./routetPath')
const userControl = require('../../../controller/user')


module.exports = router => {

  router.post(routerPath.login, userControl.login())

  return router
}