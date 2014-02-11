'use strict';


var DashboardModel = require('../models/dashboard');


module.exports = function (app) {

    var model = new DashboardModel();


    app.get('/dashboard', function (req, res) {
        
        res.format({
            json: function () {
                res.json(model);
            },
            html: function () {
                res.render('dashboard', model);
            }
        });
    });

};
