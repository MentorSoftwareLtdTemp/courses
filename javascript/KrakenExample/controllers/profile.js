'use strict';


var ProfileModel = require('../models/profile');
var auth = require('../lib/auth');

module.exports = function (app) {

    var model = new ProfileModel();


    app.get('/profile', auth.isAuthenticated(), function (req, res) {
        
        res.format({
            html: function () {
                res.render('profile', model);
            }
        });
    });

};
