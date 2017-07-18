'use strict'

const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const compression = require('compression')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const config = require('./config')

// import middleware
const isAuthorize = require('./routes/middleware/isAuthorize')

// import controller
const controller = require('./controller/index')

// import router
const router = require('./routes/router')

let app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// if use proxy, get IP address of the client.
app.set('trust proxy', true)

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(compression())
app.use(logger('short'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// use session
app.use(session({
  store: new RedisStore(config.redisOption),
  key: config.proName,
  secret: 'super-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: config.maxage
  }
}))

// check authorize
app.use('/api/private/*', isAuthorize)

// use controller
if (!app.controller) app.controller = controller

// use router
router(app)

// catch connect redis failed
app.use(function(req, res, next) {

  if (!req.session) {
    let err = new Error('Connect Redis Failed')
    next(err)
  }

  next()

})

// catch 404 and forward to error handler
app.use(function(req, res, next) {

  let err = new Error('Not Found')

  err.status = 404

  next(err)

})

// error handler
app.use(function(err, req, res, next) {

  console.error(err.message)

  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  let status = err.status === undefined ? '500' : err.status.toString()

  res.render(status, {
    user: req.session.user || null
  })

})

module.exports = app