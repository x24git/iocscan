// Call Dependancies
const PORT = 3000;
var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var csrf = require('csurf-expire');
var rateLimit = require("express-rate-limit");
var helmet = require('helmet')
var logger = require('morgan');
var path = require('path');
var api = require('./support/js/api');

//Rate Limiter
const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5
});

//Start Express Settings
var app = express();
app.enable('trust proxy');
app.set('views', './views');
app.set('view engine', 'jade');

//Use Express Middleware
app.use(helmet({hidePoweredBy:{setTo:'The Tears of Our Vanquished Foes'}}));
app.use(logger('dev'));
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'dist/x24scan')));
app.use(cookieParser("***REMOVED***"))
app.use(csrf({cookie:{key:"_crdid",maxAge:60*60}}));
app.use(function (err, req, res, next) {
  if (err.code == 'EBADCSRFTOKEN')
    err.status = 403
    err.code = "Forbidden"
	  err.message = "CSRF verification failed. Request aborted."
	  throw err;
})

//Call Express Routes
app.use('/api',apiLimiter, api);


app.use(function(req, res, next) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  next();
});

app.use(express.static(path.join(__dirname, 'dist/iocscan')));
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'dist/iocscan/index.html'));
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? {} : {};
  console.log(req.app.get('env'));

  // render the error page
  res.status(err.status || 500);
  res.render('csrf');
});



app.listen(PORT, (err) => {
	if (err) {
		console.log("Error occurred", err) ;
	}
	console.log(`Server is listening on port ${PORT}`);
});



