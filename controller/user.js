/**
 * user业务模块
 */

const util = require('./util')
const config = require('../config')

module.exports = {

  /**
   * 登录
   */
  login: () => {

    return (req, res) => {

      let { userName, passWord } = req.body

      let param = {
        userName,
        passWord
      }

      let token = util.createToken({
        'userName': param.userName,
        'time': util.now()
      }, config.tokenKey)

      console.log(token)

      console.log(util.tokenDecode(token, config.tokenKey))

      req.session.user = token

      res.send({
        statusCode: 200,
        message: 'login success'
      })

    }

  }

}