var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
//var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lusca = require('lusca');
var session = require('express-session');


var routes = require('./routes/index');
var users = require('./routes/users');
var test = require('./routes/test');

var app = express();
app.use(session({secret: 'keyboard cat'}))
/*use lusca*/
app.use(lusca({
    csrf: true,
    csp: false,
    xframe: false,
    p3p: false,
    hsts: false,
    xssProtection: false
}));



// simple logger
app.use(function(req, res, next){
    console.log('Simple logger %s %s', req.method, req.url);
    var sess = req.session;
    console.log('Request session', req.session);
    next();
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon());
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/test', test);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});



module.exports = app;
