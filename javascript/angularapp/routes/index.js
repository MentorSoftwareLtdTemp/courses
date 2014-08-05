var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    var obj = {
        isActive: function (route) {
            if (route === "/") {
                return "active";
            }
            else {
                return "";
            }

        },
        title: 'Angular tutorial'
    };

    res.render('index', obj);
});

module.exports = router;
