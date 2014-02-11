/**
 * Created by mdylag on 28/01/2014.
 */
/*function Shape(){
    this.type = 'shape';
    this.getType = function() {return this.type;};
}*/
var shape =
{
    type : 'shape',
    getType : function() {return this.type;}
}


function Triangle(a,b,c){

    Triangle.prototype.type= "Triangle";
    this.a = a;
    this.b = b;
    this.c = c;
}
Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function()
{
    return this.a * this.b * this.c;
}
var t = new Triangle(1,2,3);
console.log(t.getType());
console.log(t);
console.log(shape.isPrototypeOf(t));
console.log(t.getPerimeter());

for (i in t)
{
    if (t.hasOwnProperty(i))
        console.log("My property" + i);
}






