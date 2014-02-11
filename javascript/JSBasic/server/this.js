//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
//http://www.slideshare.net/Solution4Future/javascript-17363650

console.log(this.document === document); // true

// In web browsers,
// the window object is also the global object:
console.log(this.window === window); // true

this.a = 37;
console.log(window.a); // 37



//
function f1(){
    return this;
}
var a=f1();
console.log(a);


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode
function f2(){
    "use strict"; // see strict mode
    return this;
}

var a=f2();
console.log(a);

//
function f2(){
    console.log("f2" + this);
    function f22()
    {
        console.log( "f22" + this);
    }
    f22();
}
f2();


//
function foo() {
    console.log(this);
}

// caller activates "foo" (callee) and
// provides "this" for the callee
foo();

var bar = {
    baz: foo
};

bar.baz(); // bar

function f(fun)
{
    fun();
}
f(bar.baz);


var otherFoo = bar.baz;
otherFoo(); // again global object

//3
var foo = {x: 10};

var bar = {
    x: 20,
    test: function () {

        console.log(this === bar); // true
        console.log(this.x); // 20
        console.log(this);

    }

};

bar.test();
foo.test = bar.test;
foo.test(); // false, 10


//4
var o = {
    prop: 37,
    f: function() {
        return this.prop;
    }
};

console.log(o.f());

var o = {prop: 37};

function independent() {
    return this.prop;
}

o.f = independent;

console.log(o.f());

o.b = {g: independent, prop: 42};
console.log(o.b.g());

//5
var o = {f:function(){ return this.a + this.b; }};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f());











(bar.baz)(); // also bar
(bar.baz = bar.baz)(); // but here is global object
(bar.baz, bar.baz)(); // also global object
(false || bar.baz)(); // also global object
