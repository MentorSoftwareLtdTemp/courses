//Array
var a = new Array();
a;
var a = [];
a;
a[0] = 1; a[1] = 2; a;
a;

var a2 = new Array(5)
a2;

var a = new Array(1,2,3,'four');
a;
typeof a;
a.toString();

//Array and objects
var a = [], o = {};

console.log(a.length);
console.log(typeof o.length);

a[0] = 1; o[0] = 1;
a.prop = 2; o.prop = 2;
console.log(a.length);
console.log(o.length);

console.log(a.prop);
console.log(o.prop);

a;
a.length = 5
a;
a.length = 2;
a;

//array methods
var a = [3, 5, 1, 7, 'test'];
a;

a.push('new');
a;

a.pop();
a;

var b = a.sort();
a;

a.join('is not'); 

//nie modyfikuje tablicy zrodlowej.
b=a.slice;
b = a.slice(1, 3);
b = a.slice(0, 1);
b = a.slice(0, 2);

//to samo co slice ale z modyfikacja tablicy
//dwa pierwze parametry to indeksy tablicy nastepne to elelemnty ktore zostan wstawione na ich miejsce
b = a.splice(1, 2, 100, 101, 102);

a.splice(1, 3);

