var bar = 10;
var foo = function() {
    var boo = function() {
        var bar = 2;

    }();
}();
console.log(bar);

var foo = 10;

function bar() {
    (function baz() {
    });

    console.log(
            this.foo == foo,
            window.bar == bar
    );

    console.log(baz);
}
