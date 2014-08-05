
var express = require('express');
var router = express.Router();
var db=require('dirty').Dirty('my.db');

//initial load of data
db.on('load', function() {
    db.set('JanKowalski' , {firstName: "Jan", lastName: "Kowalski"});
    db.set('AlicjaKowalska' , {firstName: "Alicja", lastName: "Alicja"});
});

router.get('/', function (req, res) {
    var obj = {
        isActive: function (route) {
            if (route === "/angular") {
                return "active";
            }
            else {
                return "";
            }

        },
        title: 'Angular tutorial'
    };

    res.render('angular', obj);
});

function getPeople(req, res) {
    var people=[];
    db.forEach(function(key, val) {
        people.push(val);
    });

    res.json(people);
}

function addPerson(req, res) {
    var person = req.body;
    db.set(person.firstName+person.lastName , person);
    var add = {'status' : 0}
    res.json(add);

}

router.get('/people.json', getPeople);
router.post('/people.json', getPeople);
router.post('/addperson.json', addPerson);

module.exports = router;
