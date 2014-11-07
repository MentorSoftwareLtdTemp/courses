var _ = require('underscore');
function collection(value,index,coll)
{
    console.log("Index/Name: " + index," Value: " + value);
    console.log("Collection: " + coll);
}

var col1=[1,2,3,4,5,6];
var col2={one: 1, two: 2, three: 3};
//_.each(col1,collection);
//_.each(col2,collection);
//Znajdz wszystkie elementy parzyste dla col1
var evens = _.filter(col1, function(num) {
    return num % 2 ==0;
});
console.log(evens);
//Znajdz wszystkie elementy nieparzyste dla col1 bez
//uzycia funkcji filter
var odds = _.reject(col1, function(num){ return num % 2 == 0; });
console.log(odds);


