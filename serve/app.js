import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import * as jwt from "jsonwebtoken";
import config from './config'
let app = express();
app.use(cors());
// app.use(function (req, res, next) {
//     const url = req.originalUrl;
//     if (!url.includes('/login') || !url.includes('/register')|| !url.includes('/images')) {
//         const token = req.get('Authorization');
//         jwt.verify(token, config.key, (err, decode) => {
//             if (!err) {
//                 const dateline = Date.now() / 1000;
//                 console.log(dateline - decode.exp);
//                 if (decode.exp > dateline) {
//                     next();
//                     console.log('token验证通过');
//                 } else {
//                     res.status(401).send({
//                         err_code: -2,
//                         message: '身份识别过期,请重新登陆'
//                     });
//                 }
//             }
//         });
//     } else {
//         next();
//     }
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
