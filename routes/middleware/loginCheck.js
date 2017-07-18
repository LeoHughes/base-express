/**
 * 检查是否登录中间件，未登录则跳转登录页
 */

module.exports = (req, res, next) => {

  if (!req.session.user) {

    res.redirect('/login')

  } else {

    next()

  }

}