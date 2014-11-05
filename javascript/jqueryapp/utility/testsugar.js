var sugar = require('sugar');
//String
var encode='secret'.encodeBase64();
var decode=encode.decodeBase64();
console.log(decode, encode);

console.log('<p>just <b>some</b> text</p>'.stripTags());
console.log('<p>just <b>some</b> text</p>'.stripTags('p'));

//Object
var obj = { n1:true, n2:false };
var obj1 = Object.extended(obj);
obj.n1 = false;
console.log(obj.n1,obj1.n1);

console.log(Object.merge({a:1},{b:2}));
console.log(Object.merge({a:1},{a:2}, false, false));

Object.watch(obj, 'n1', function(prop, oldVal, newVal) {
    console.log("Watching",prop, oldVal, newVal);
});

obj.n1= true;
//Array
[1,2,3,4].each(function(el, index, array) {
    console.log("Element ", el);
});

