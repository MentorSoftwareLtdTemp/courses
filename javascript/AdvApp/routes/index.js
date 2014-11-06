var express = require('express');
var router = express.Router();
var persons = [
  { 'firstName' : 'Audrey',
    'lastName' : 'Hepburn'},
  { 'firstName' : 'Walt',
    'lastName' : 'Disney'},
  { 'firstName' : 'Unknown', 'lastName' : 'Unknown'},
  { 'firstName' : 'Neale Donald', 'lastName' : 'Walsch'}
];
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

//add
router.get('/add', function(req, res) {
  res.render('add', { title: 'Express' });
});

router.post('/persons', function(req, res) {

  res.json(persons);

  /*res.format({
    json: function () {
      res.json(model);
    }
  });*/
});

router.post('/addperson', function(req, res) {


  var person = req.body;
  persons.push(person);
  console.log(person, persons);
  res.json(persons);
  //add element to persons

  /*res.format({
   json: function () {
   res.json(model);
   }
   });*/
});




module.exports = router;
