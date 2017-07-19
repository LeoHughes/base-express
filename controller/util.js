const captchapng = require('captchapng')
const jwt = require('jwt-simple')

/**
 * 
 * 公用方法类
 */

class util {

  constructor() {}


  /**
   * 检测类型是否是Null、undefined或者''
   * 
   * @param {any} obj 
   */
  isNull(obj) {
    return obj === '' || obj === undefined || obj === null ? true : false
  }


  /**
   * 检测类型是否是Array
   * 
   * @param {any} obj 
   */
  isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]' ? true : false
  }


  /**
   * 检测类型是否是Function
   * 
   * @param {any} obj 
   */
  isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]' ? true : false
  }


  /**
   * 检测类型是否是Object
   * 
   * @param {any} obj 
   */
  isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]' ? true : false
  }


  /**
   * 检测类型是否是String
   * 
   * @param {any} obj 
   */
  isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]' ? true : false
  }


  /**
   * 检测类型是否是Number
   * 
   * @param {any} obj 
   */
  isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]' ? true : false
  }


  /**
   * 检测类型是否是Boolean
   * 
   * @param {any} obj 
   */
  isBoolean(obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]' ? true : false
  }


  /**
   * 如果object 不包含任何值，返回true。 对于字符串和数组对象，如length属性为0，那么返回true。
   * 
   * @param {any} obj 
   */
  isEmpty(obj) {
    let flag = true

    if (this.isArray(obj) || this.isNumber(obj) || this.isString(obj)) {

      flag = obj.length === 0 ? true : false

    } else {

      for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
          flag = false
        }
      }

    }

    return flag
  }


  /**
   * 过滤html标签
   * 
   * @param {any} str 需要过滤的值
   */
  filterHTML(str) {

    return str.replace(/<\/?[^>]*>/g, '')

  }


  /**
   * 根据时间毫秒数输出格式化时间
   * 
   * @param {any}    time   毫秒数
   * @param {string} dsper  日期分隔符
   * @param {string} tsper  时间分隔符
   */
  dateToLocaleString(time, dsper = '-', tsper = ':') {

    if (!time) return

    let date = new Date(parseInt(time))

    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    return `${year}${dsper}${month}${dsper}${day} ${hours}${tsper}${minutes}${tsper}${seconds}`

  }

  /**
   * 
   * 生成时间戳
   */
  now() {

    let time = this.dateToLocaleString(new Date().getTime(), '', '')

    return time.replace(/ /g, '')

  }


  /**
   * 
   * 生成验证码图片
   */
  createImgCode() {

    return (req, res) => {

      let code = parseInt(Math.random() * 9000 + 1000)
      let p = new captchapng(80, 30, code)

      p.color(30, 0, 10, 0)
      p.color(80, 80, 80, 255)

      let img = p.getBase64()
      let imgbase64 = Buffer.from(img, 'base64')

      //将验证码值存入session
      if (req.session) req.session.imgCode = code

      res.end(imgbase64)
    }

  }


  /**
   * 根据数据生成token
   * 
   * @param {any} payload    需要加密的信息
   * @param {any} key     加密key
   */
  createToken(payload, key) {

    return jwt.encode(payload, key)

  }


  /**
   * token解析
   * 
   * @param {any} token   需要解密的token值 
   * @param {any} key     加密key
   */
  tokenDecode(token, key) {

    return jwt.decode(token, key)

  }


  /**
   * 根据数据渲染页面
   * 
   * @param {string}  name   view名称
   * @param {any}     param  渲染数据
   * 
   */
  render(name = '', param = {}) {

    return (req, res) => {

      res.render(name, param)

    }

  }

}

module.exports = util