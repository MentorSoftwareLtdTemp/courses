/**
 * Created with JetBrains WebStorm.
 * User: mdylag
 * Date: 10/09/2013
 * Time: 14:55
 * To change this templ
 * ate use File | Settings | File Templates.
 */

//Tworzenie

var obj1 = {};
console.log(obj);

var obj2 = new Object();

var obj3 = Object.create(obj1);
console.log(obj3);

//itteracja
var obj = {a : 1, b : "Two", c: true};
for (i in obj)
{
    console.log(i, obj[i]);
}


//Dynamic muttable object
object.method5 = function () {}; // add new method
object.d = 40; // add new property "d"
delete object.c; // remove property "с"
object.a = 100; // modify property "а"

//„Prototype based model” "Delegation based model"
x = {a: 10, b: 20};
y = {a: 40, c: 50};
y.__proto__ = x;
console.log("Object y", y); // 40, own characteristic // 50, also own
 // 20 – is gotten from the prototype: y.b (no) -> y.[[Prototype]].b (yes): 20

delete y.a; // removed own "а"
console.log("Object y", y); // 40, own characteristic // 50, also own // 10 – is gotten from the prototype

z = {a: 100, e: 50}
y.__proto__= z; // changed the prototype of the y to z
console.log("Object y", y); // 100 – is gotten from the prototype // 50, also – is gotten from the prototype

z.q = 200 // added new property to the prototype
console.log("Object y", y); // changes are available and on y


//prototype chain
x = {a: 10}

y = {b: 20}
y.__proto__ = x

z = {c: 30}
z.__proto__ = y

console.log(z.a); // 10


//Wlasciwosci/ configurable, writable, enumerable
var person = {
    name: "Nicholas"
};
//Writable
var person = {};
Object.defineProperty(person, "name",
    {
        writable: false,
        value: "Nicholas"
    }
);
console.log("Before" ,person.name);
person.name="Mirek";
console.log("After", person.name);

//Configurable
var person = {};
Object.defineProperty(person, "name",
    {
        configurable: false,
        value: "Nicholas"
    }
);
console.log("Before" ,person.name);
delete person.name;
console.log("After", person.name);

//Enumerable


//Accessor property
var book = {
    _year: 2004,
    edition: 1
};
Object.defineProperty(book, "year", {
    get: function(){
        return this._year;
    },
    set: function(newValue){
        if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});
book.year = 2005;
alert(book.edition); //2


//Can not extend object
//Cannot be extended with new properties and none of the properties can be modified or deleted
var foo = {x: 10};

// freeze the object
Object.freeze(foo);
console.log(Object.isFrozen(foo)); // true

// can't modify
foo.x = 100;

// can't extend
foo.y = 200;

// can't delete
delete foo.x;

console.log(foo); // {x: 10}


//preventExtensions
var foo = {x : 10};

Object.defineProperty(foo, "y", {
    value: 20,
    writable: false, // read-only
    configurable: false // non-configurable
});

// can't modify
foo.y = 200;

// can't delete
delete foo.y; // false

// prevent extensions
Object.preventExtensions(foo);
console.log(Object.isExtensible(foo)); // false

// can't add new properties
foo.z = 30;

console.log(foo); //{x: 10, y: 20}