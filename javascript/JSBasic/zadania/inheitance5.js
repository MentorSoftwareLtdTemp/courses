function Shape(){
    this.name = 'shape';
    this.toString = function() {return this.name;};
}

var a= new Shape();

var b=Object.create(a, {name:{value: "TwoDShape"}});
b.super=a;

console.log("Shape",a);
console.log("TwoDShape", b);

//test
console.log("Shape toString", a.toString());
console.log("TwoDShape toString", b.toString());

//option 2
console.log("Option 2");
var a= new Shape();
function extends1(Parent)
{
    var child = Object.create(Parent);
    child.super = Parent;
    return child;
}

var b=extends1(a);
b.name="TwoDShape";

console.log("Shape",a);
console.log("TwoDShape", b);
console.log("Super", b.super);

//test
console.log("Shape toString", a.toString());
console.log("TwoDShape toString", b.toString());
console.log("Super toString", b.super.toString());
