var createError = require('http-errors'); // 处理错误信息
var express = require('express'); // 引用 express 框架
var path = require('path'); // node 的 PATH 模块
var cookieParser = require('cookie-parser'); // 处理 Cookie 的模块
var logger = require('morgan'); // 处理日志的模块

var indexRouter = require('./routes/index'); // 默认的路由实例 /
var usersRouter = require('./routes/users'); // /users 路由

var app = express(); // 创建 express 实例

// 视图模板文件 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev')); // 注册日志模块
app.use(express.json()); // 使用 JSON 格式处理 请求/响应 数据
app.use(express.urlencoded({ extended: false })); // 根据不同的请求数据格式体，决定如何如理
app.use(cookieParser()); // 注册处理 Cookie 的模块
app.use(express.static(path.join(__dirname, 'public'))); // 注册静态资源的路径

app.use('/', indexRouter); // 注册 / 路由
app.use('/users', usersRouter); // 注册 /users 路由

// 处理 404
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// 根据环境处理错误信息，生产环境下不暴露错误信息
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
