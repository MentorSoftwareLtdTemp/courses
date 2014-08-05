var request = require('request');
describe('jasmine-node-flat', function() {
    it("should respond with array of persons", function (done) {
        request("http://localhost:3000/angular/people", function (error, response, body) {
            expect(body).toEqual("hello world");
            done();
        });
    });
});

