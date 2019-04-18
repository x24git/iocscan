// Call Dependancies
var http = require('http')
var https = require('https')

var fs = require('fs')
var createError = require('http-errors')
var express = require('express')
var cookieParser = require('cookie-parser')
var csrf = require('csurf')
var rateLimit = require('express-rate-limit')
var helmet = require('helmet')
var logger = require('morgan')
var path = require('path')
var api = require('./support/js/api')

// SSH keys (comment out if not using SSH)
var port = 8000
var portSSL = 4433
const options = {
  key: fs.readFileSync('***REMOVED***.key'),
  cert: fs.readFileSync('***REMOVED***.pem')
}

// Rate Limiter
const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 15
})

// Start Express Settings
var inDevelopment = false // used for debugging TURN OFF WHEN GOING IN PRODUCTION
var app = express()
app.enable('trust proxy')
app.set('views', './support/jade')
app.set('view engine', 'jade')

// Use Express Middleware
app.use(helmet({ hidePoweredBy: { setTo: 'The Tears of Our Vanquished Foes' } }))
app.use(logger('dev'))
app.use(express.json())
// app.use(express.static(path.join(__dirname, 'dist/x24scan')));
app.use(cookieParser('***REMOVED***'))
app.use(csrf({ cookie: { key: '_crdid' } }))
app.use(function (err, req, res, next) {
  if (err.code === 'EBADCSRFTOKEN') {
    err.status = 403
    err.code = 'Forbidden'
    err.message = 'CSRF verification failed. Request aborted.'
    throw err
  }
})

// Call Express Routes
app.use('/api', apiLimiter, api)

app.use(function (req, res, next) {
  res.cookie('XSRF-TOKEN', req.csrfToken())
  next()
})

app.use(express.static(path.join(__dirname, 'prod/iocscan')))
app.use(express.static(path.join(__dirname, 'support/img')))
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'prod/iocscan/index.html'))
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = { status: err.status, message: err.message }

  // render the error page
  res.status(err.status || 500)
  res.locals.error.development = inDevelopment
  res.render('csrf')
})

http.createServer(app).listen(port, (err) => {
  if (err) {
    console.log('Error occurred', err)
  }
  console.log(`Server is listening on port ${port}`)
})

https.createServer(options, app).listen(portSSL, (err) => {
  if (err) {
    console.log('Error occurred', err)
  }
  console.log(`Server is listening on port ${portSSL}`)
})
