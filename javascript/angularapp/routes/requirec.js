var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    var obj = {title: 'Angular tutorial'};
    res.render('requirec', obj);
});

module.exports = router;
