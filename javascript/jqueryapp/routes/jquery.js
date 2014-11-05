var express = require('express');
var router = express.Router();

/* GET /jquery */
router.get('/', function(req, res) {
  res.render('jquery', { title: 'Express' });
});


function jsonData(request, response)
{
    var quotes = [
        { 'firstName' : 'Audrey',
            'lastName' : 'Hepburn'},
        { 'firstName' : 'Walt',
            'lastName' : 'Disney'},
        { 'firstName' : 'Unknown', 'lastName' : 'Unknown'},
        { 'firstName' : 'Neale Donald', 'lastName' : 'Walsch'}
    ];
    response.json(quotes);    // echo the result back
}
//REST API  localhost:3000/jquery/json
router.post('/json', jsonData);


module.exports = router;
