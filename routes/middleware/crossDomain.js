/**
 * 支持跨域调用中间件
 */

module.exports = (req, res, next) => {

  //设置允许请求的域
  res.setHeader('Access-Control-Allow-Origin', '*');
  //设置允许请求的方法
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  //设置可以在header里传输的数据
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,userToken');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next()

}