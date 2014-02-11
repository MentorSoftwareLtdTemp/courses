function f11()
{
    console.log("f11");
}

var ref1= f11;
ref1();

function f11()
{
    console.log("f12");
}

ref1();



var f1 = function()
{
    console.log("f1");
}
var ref2=f1;
ref2();

var f1= function()
{
    console.log("f2");
}

ref2();

//typy proste
var a = 10;
var b = a;
console.log(a,b);
a=20;
console.log(a,b);
b=30;
console.log(a,b);




//tablice
var tab = [10];
var tabRef = tab;
console.log(tab,tabRef);
tabRef[0]=20;
console.log(tab,tabRef);
tab[0]=30;
console.log(tab,tabRef);

tab=[];
console.log(tab,tabRef);

//obiekty
var obj= {a:10};
var objRef = obj;
console.log(objref===obj);

console.log(obj,objRef);
objRef.a=20;
console.log(obj,objRef);
obj.a=30;
console.log(obj,objRef);

var obj= {a:10};
var objRef = obj;
console.log(objref===obj);
obj = {}
console.log(obj,objRef);
console.log(objref===obj);

//funkcje
var a=10;
var tab=[10];
var obj={a:10};
function fref(x,y,z)
{
    x = 20;
    y[0]=20;
    z.a=20;
    z.b=20;
    z = {};
    console.log(x,y,z)

}
fref(a,tab,obj);
console.log(a,tab,obj);