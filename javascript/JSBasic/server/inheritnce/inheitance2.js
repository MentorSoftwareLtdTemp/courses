function Shape(){}
// augment prototype
//Shape.prototype.name = 'shape';
Shape.prototype.name = 'shape';

Shape.prototype.toString = function() {return this.name;};
function TwoDShape(){}
// take care of inheritance
function extends1(Parent, Child)
{
    Child.prototype = new Parent();
    Child.prototype.constructor = Parent;
}
extends1(Shape, TwoDShape);
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

