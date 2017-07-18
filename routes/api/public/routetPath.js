// 设置前缀
let prefix = '/api/public'

// 映射路由地址
let router_path = {

  /**
   * 测试地址
   */
  'login': '/login'

}


// 统一添加前缀
router_path = require('../../middleware/addMapPrefix.js')(prefix, router_path)

module.exports = router_path