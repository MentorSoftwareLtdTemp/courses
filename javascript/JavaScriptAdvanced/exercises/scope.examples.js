//1) W jakim kontekscie jest utworzona zmienna x.
if (window) {
    var x = 213;
}
//Co zostanie wyswietlone na ekranie
console.log(x);

//2) Jaka wartosc wyswietli funkcja console.log
var foo = function() {
    var boo = function() {
        bar = 2;

    }();
}();
console.log(bar);

//3) Jaka wartosc wyswietli funkcja console.log
var bar = 10;
var foo = function() {
    var boo = function() {
        bar = 2;

    }();
}();
console.log(bar);


//4) Jaka wartosc wyswietli funkcja console.log
var bar = 10;
var foo = function() {
    var boo = function() {
        var bar = 2;

    }();
}();
console.log(bar);


//5)
function bar() {
    function baz() {
    };

    console.log(
            this.foo == foo,
            window.bar == bar
    );

    console.log(baz);
}
bar();





