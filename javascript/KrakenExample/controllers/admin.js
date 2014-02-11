'use strict';


var AdminModel = require('../models/admin');


module.exports = function (app) {

    var model = new AdminModel();


    app.get('/admin', function (req, res) {
        
        res.format({
            json: function () {
                res.json(model);
            },
            html: function () {
                res.render('admin', model);
            }
        });
    });

};
