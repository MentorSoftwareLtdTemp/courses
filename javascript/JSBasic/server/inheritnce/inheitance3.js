function Shape(){
    this.name = "shape";
}
// augment prototype
Shape.prototype.name = 'shape';
Shape.prototype.toString = function() {return this.name;};
var a = new Shape();


function TwoDShape(){}
// take care of inheritance
TwoDShape.prototype = Shape.prototype;
TwoDShape.prototype.constructor = TwoDShape;
// augment prototype
TwoDShape.prototype.name = '2D shape';

var b = new TwoDShape();

console.log("Shape",a);
//console.log("TwoDShape", b);

//test
console.log("Shape toString", a.toString());
//console.log("TwoDShape toString", b.toString());

