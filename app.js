var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var PythonShell = require('python-shell');

var index = require('./routes/index');
var keyboard = require('./routes/keyboard');
var message = require('./routes/message');
var chat_room = require('./routes/chat_room');
var friend = require('./routes/friend');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//port setup
app.set('port',process.env.PORT || 9000);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/keyboard', keyboard);
app.use('/message', message);
app.use('/chat_room', chat_room);
app.use('/friend', friend);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
////////////////////////////////////////////
// ------------CREATES SERVER---------------
module.exports = app;

var server = app.listen(app.get('port'), function(){
	console.log('Express server listening on port '+ server.address().port);
});

module.exports = app;
