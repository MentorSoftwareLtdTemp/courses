/*global describe:false, it:false, before:false, after:false, afterEach:false*/

'use strict';


var app = require('../index'),
    kraken = require('kraken-js'),
    request = require('supertest'),
    assert = require('assert');


describe('api', function () {

    var mock;


    beforeEach(function (done) {
        kraken.create(app).listen(function (err, server) {
            mock = server;
            done(err);
        });
    });


    afterEach(function (done) {
        mock.close(done);
    });


    it('should return "json"', function (done) {
        request(mock)
            .get('/api')
            .expect(200)
            .expect('Content-Type', /json/)
            //.expect(/Hello, /)
            .end(function(err, res){
                console.log(res);
                done(err);
            });
    });

});