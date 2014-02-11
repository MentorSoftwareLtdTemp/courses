//Dodatkowe informacje:
//http://www.crockford.com/javascript/inheritance.html
//1
function Shape(){
    this.name = 'shape';
    this.toString = function() {return this.name;};
}

function TwoDShape(){
    this.name = '2D shape';
}

function extends1(constrBasic, constrExt)
{
    constrExt.prototype = new constrBasic();
    var retObj = new constrExt();
    retObj.super = constrExt.prototype;
    return retObj;
}


var a = new Shape();
var b = extends1(Shape, TwoDShape);

console.log("Shape",a);
console.log("TwoDShape", b);
console.log("Super", b.super);

//test
console.log("Shape toString", a.toString());
console.log("TwoDShape toString", b.toString());
console.log("TwoDShape Super toString", b.super.toString());

