var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
setApp = () => {
  return new Promise(
    async (resolve, reject) => {
      try {
        global._base = __dirname;
        global._ServiceType = process.env.ServiceType || 'production';
        global._props = require(__dirname + '/config/' + _ServiceType + '/property.js');


        global._mybatisMapper = require('mybatis-mapper');

        var indexRouter = require('./api/routes/index');

        // view engine setup
        app.set('views', path.join(__dirname, 'views'));
        app.set('view engine', 'ejs');

        app.use(logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(cookieParser());
        app.use(express.static(path.join(__dirname, 'public')));

        app.use('/', indexRouter);

        // catch 404 and forward to error handler
        app.use(function (req, res, next) {
          next(createError(404));
        });

        // error handler
        app.use(function (err, req, res, next) {
          console.error(err);
          let errorStatus = err.status || 500;
          let errorMessage = err.message;

          // set locals, only providing error in development
          res.locals.message = errorMessage;
          res.locals.error = req.app.get('env') === 'development' ? err : {};

          // render the error page
          res.status(errorStatus);
          res.json({ result_code: '99', result_message: '에러', status: errorStatus, error_message: errorMessage });
        });

        resolve(app);

      } catch (error) {
        console.log("error : ", error)
        reject(error);
      }
    }
  )
};

module.exports = setApp();