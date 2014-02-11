var foo = 0; // global scope
console.log(foo); // logs 0

var myFunction = function() {
    var foo = 1; // local scope
    console.log(foo); // logs 1
    var myNestedFunction = function() {
        var foo = 2; // local scope
        console.log(foo); // logs 2
    }();


}();

eval('var foo = 3; console.log(foo);'); // eval() scope

//JavaScript Does Not Have Block Scope
if (window) {
    var x = 213;
}
console.log(x);

//missing var
var foo = function() {
    var boo = function() {
        bar = 2; /* no var used, so bar is placed in the global scope
         at window.bar */
    }();
}();
console.log(bar); // logs 2, because bar is in the global scope


//scope
var sayHiText = 'howdy';
var func1 = function() {
    var func2 = function() {
        console.log(sayHiText); /* func2 scope, but it finds sayHiText in
         global scope */
    }();
}();

//scope chain
var x = 10;
var foo = function() {
    var y = 20;
    var bar = function() {
        var z = 30;
        console.log(z + y + x); // z is local, y and z are found in the scope chain
    }();
}()
foo(); // logs 60

//
var x = false;
var foo = function() {
    var x = false;
    bar = function() {
        var x = true;
        console.log(x); // local x is first in the scope so it shadows the rest
    }();
}
foo(); // logs true

//Scope Is Determined During Function Definition,
//not Invocation
var parentFunction = function() {
    var foo = 'foo';
    return function() { // anonymous function being returned
        console.log(foo); // logs 'foo'
    }
}
var nestedFunction = parentFunction();
nestedFunction();

function f1()
{
    var v1 = 1;
    function f2()
    {
        var v2 = 2;
    }
    f2();

}
f1();


//Variable object: foo = 100, function bar
var foo = 10;

function bar() {} // function declaration, FD
(function baz() {}); // function expression, FE

console.log(
    this.foo == foo, // true
    window.bar == bar // true
);

console.log(baz); // ReferenceError, "baz" is not defined

//Activation object: x:10, y:20, arguments {0:10, 1:20}, z:30, function bar
function foo(x, y) {
    var z = 30;
    function bar() {} // FD
    (function baz() {}); // FE
}

foo(10, 20);

