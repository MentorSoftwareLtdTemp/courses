'use strict';


var ApiModel = require('../models/api');
var auth = require('../lib/auth');

module.exports = function (app) {

    var model = new ApiModel();


    app.get('/api', auth.isAuthenticated(), function (req, res) {
        
        res.format({
            json: function () {
                res.json(model);
            }
        });
        //res.render('index', model);

    });

};
