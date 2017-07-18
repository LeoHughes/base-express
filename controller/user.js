const proxy = require('../mod/proxy')
const util = require('./util')

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

      let token = this.createToken(param, 'test')

      console.log(this.tokenDecode(token, 'test'))

      res.send({
        statusCode: 200,
        message: 'login success'
      })

    }

  }

}

module.exports = user