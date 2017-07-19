const proxy = require('../mod/proxy')
const util = require('./util')
const config = require('../config')

/**
 * 
 * 
 * @class user
 */
class user extends util {

  constructor() {
    super()
  }

  /**
   * 登录
   */
  login() {

    return (req, res) => {

      let { userName, passWord } = req.body

      let param = {
        userName,
        passWord
      }

      let token = this.createToken({
        'userName': param.userName,
        'time': this.now()
      }, config.tokenKey)

      console.log(token)

      console.log(this.tokenDecode(token, config.tokenKey))

      res.send({
        statusCode: 200,
        message: 'login success'
      })

    }

  }

}

module.exports = user