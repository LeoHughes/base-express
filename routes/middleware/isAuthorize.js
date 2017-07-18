/**
 * 检测是否授权访问私有接口
 */

module.exports = (req, res, next) => {

  if (!req.session.user) {

    res.status(403).send({
      statusCode: 403,
      message: 'is not authorized'
    })

  } else {

    next()

  }

}