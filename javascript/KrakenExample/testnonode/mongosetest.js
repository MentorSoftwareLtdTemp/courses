var kraken = require('kraken-js'),
    db = require('../lib/database'),
    passport = require('passport');
    //auth = require('../lib/auth');
var mongoose = require('mongoose');


var databaseConfig = {
    "host": "localhost",
    "database": "passportTest"
};

db.config(databaseConfig);

var userModel = function () {

    var userSchema = mongoose.Schema({
        name: String,
        login: { type: String, unique: true }, //Ensure logins are unique.
        password: String, //We'll store bCrypt hashed passwords. Just say no to plaintext!
        role: String
    });
    userSchema.pre('save', function (next) {
        var user = this;
        console.log('pre save');
        next();
    });
    return mongoose.model('User', userSchema);
};
var User = new userModel();

var u1 = User({
    name: 'Kraken McSquid',
    login: 'kraken',
    password: 'releaseMe',
    role: 'admin'
});



u1.save(function(err, result,numberAffected)
{
    if (err)
    {
        console.log('Error for save the data because exists in that case',err);
        console.log('Number ' ,numberAffected)
    }

});

User.find({}).exec(function(err, result) {
    if (!err) {
        console.log('Find the record', result);

        // handle result
    } else {
        // error handling
    };
});

User.remove({login: 'kraken'}, function (err, u1) {
    if (err){
        console.log(error);
    }
    User.findById(u1._id, function (err, product) {
        console.log('Find',u1) // null
    })
    console.log('Remove the record');
});