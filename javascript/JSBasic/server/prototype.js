
function A() {
    this.a = 10;
}

var a = new A();
console.log(a.x, a); // 10 – by delegation, from the prototype

A.prototype.y = 20;
console.log(a.y, a);


console.log("===============");// object "b" has new prototype

/*function A() {}

A.prototype = {
    constructor: A,
    y: 100
};

function A(){this.a = 10};
var b = new A();
b.x=10;
var c = Object.create(b);
console.log(c);// object "b" has new prototype
console.log(b.x);
console.log(b.y); // 100 – by delegation, from the prototype
console.log(b);
//console.log(a.x);


function Gadget(name) {
    this.name = name;
}
Gadget.prototype.name = 'foo';

var toy = new Gadget('camera');
toy.name;								//camera
delete toy.name;
toy.name;								//foo

toy.name = 'camera';				//recreate
toy.name;								//camera


*/