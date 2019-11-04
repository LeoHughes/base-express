/**
 * views页面模块(只负责页面输出渲染)
 */

const path = require('path')

const proxy = require('interfaceproxy')
const util = require('./util')

const pm = new proxy(path.resolve(__dirname,'../interface.json'))


module.exports = {

  /**
   * 首页
   */
  index() {

    return async(req, res) => {

      console.log(req.session);

      let data = await pm.send('getZhiHuData')

      let list

      if (data.statusCode == 200 && data.content) list = data.content.stories

      res.render('index', {
        list: list
      })

    }

  },

  /**
   * 登录页
   */
  login() {

		//return util.render('login')
		
		return (req, res) => {
			res.render('login')
		}

  },

  /**
   * 验证码
   */
  imgCode() {

    return this.createImgCode()

  }

}