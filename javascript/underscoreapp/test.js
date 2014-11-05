/**
 * Created by mdylag on 09/06/2014.
 */
var assert = require('assert');
var _ = require('underscore');

function collection(value,index,coll)
{
    console.log("Index/Name: " + index," Value: " + value);
    console.log("Collection: " + coll);
}
console.log(_);
_.each([1, 2, 3], collection);
_.each({one: 1, two: 2, three: 3}, collection);

var newArray=_.map([1, 2, 3], function(num){ return num * 3; });
console.log("Function map: "+ newArray);

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log("Function reduce: "+ sum);

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log("Function find: ", even);

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log("Function filter: ", evens);

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log("Function reject: ", odds);
