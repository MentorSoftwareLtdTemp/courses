//1)Jakie wartości beda mialy zmienne count i result po wykonaniu ponizzszego kodu

function addTen(num) {
    num += 10;
    return num;
}
var count = 20;
var result = addTen(count);

//count
//result

//2) Jaka wartosc przyjmie wlasciwosc person.name po wykonaniu ponizszego kodu. Dlaczego ?
function setName(obj) {
    obj.name = "Nicholas";
}
var person = new Object();
setName(person);
console.log(person.name);

//3) Co wyswietli funkcja n
var a = 1;
function f() {
    var a = 2;
    function n() {
        console.log(a);
    }
    n();
}
f();


