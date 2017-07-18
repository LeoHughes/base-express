const proxy = require('../mod/proxy')
const util = require('./util')

/**
 * 
 * 
 * @class page
 */

class page extends util {

  constructor() {
    super()
  }

  /**
   * 首页
   */
  index() {

    return async(req, res) => {

      let data = await proxy.send('getZhiHuData')

      let list

      if (data.statusCode == 200 && data.content) list = data.content.stories

      res.render('index', {
        list: list
      })

    }

  }

  /**
   * 登录页
   */
  login() {

    return this.render('login')

  }

  /**
   * 验证码
   */
  imgCode() {

    return this.createImgCode()

  }

}

module.exports = page