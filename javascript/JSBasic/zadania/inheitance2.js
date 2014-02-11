function Shape(){}
// augment prototype
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {return this.name;};
function TwoDShape(){}
// take care of inheritance
TwoDShape.prototype = new Shape();
TwoDShape.prototype.constructor = TwoDShape;
// augment prototype
TwoDShape.prototype.name = '2D shape';
// take care of inheritance

var a = new Shape();
var b = new TwoDShape();

console.log("Shape",a);
console.log("TwoDShape", b);

//test
console.log("Shape toString", a.toString());
console.log("TwoDShape toString", b.toString());

