var express = require('express');
var router = express.Router();
var util = require('../model/utils');

router.get('/', function(req, res) {
    var obj = {
        isActive: function (route) {
            if (route === "/jquery") {
                return "active";
            }
            else {
                return "";
            }

        },
        title: 'Jquery tutorial'
    };
  res.render('jquery', obj);
});


function jsonData(request, response)
{
    var quotes = [
        { 'firstName' : 'Audrey', 'lastName' : 'Hepburn'},
        { 'firstName' : 'Walt', 'lastName' : 'Disney'},
        { 'firstName' : 'Unknown', 'lastName' : 'Unknown'},
        { 'firstName' : 'Neale Donald', 'lastName' : 'Walsch'}
    ];
    console.log(request.body);      // your JSON
    response.json(quotes);    // echo the result back
}
//REST API
router.post('/json', jsonData);
router.get('/json', jsonData);

module.exports = router;
