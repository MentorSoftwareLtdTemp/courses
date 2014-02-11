'use strict';


var RegisterModel = require('../models/register');


module.exports = function (app) {

    var model = new RegisterModel();


    app.get('/register', function (req, res) {
        
        res.render('register', model);
        
    });

};
