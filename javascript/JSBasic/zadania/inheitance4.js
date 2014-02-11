function Shape(){}
// augment prototype
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {return this.name;};
function TwoDShape(){}
// take care of inheritance
var F = function(){};
F.prototype = Shape.prototype;
TwoDShape.prototype = new F();
TwoDShape.prototype.constructor = TwoDShape;
// augment prototype
TwoDShape.prototype.name = '2D shape';

var a = new Shape();
var b = new TwoDShape();

console.log("Shape",a);
console.log("TwoDShape", b);

//test
console.log("Shape toString", a.toString());
console.log("TwoDShape toString", b.toString());

