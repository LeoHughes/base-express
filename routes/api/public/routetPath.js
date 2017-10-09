// 设置前缀
let prefix = '/api/public'

// 映射路由地址
let paths = {

  /**
   * 测试地址
   */
  'login': '/login'

}


// 统一添加前缀
router_path = require('../../middleware/addMapPrefix.js')(prefix, paths)

module.exports = router_path