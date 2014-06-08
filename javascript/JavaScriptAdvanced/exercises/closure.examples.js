//1) Popraw ponizszy kod tak aby
var data = [];

for (var k = 0; k < 3; k++) {
    data[k] = function () {
        console.log(k);
    };
}
//ponizszy kod wyswietlal wartosc indeksu
data[0](); // 1
data[1](); // 2
data[2](); // 3

//2 Popraw kod tak aby pozbyc sie zmiennej globalnej licznik
var licznik=0;
function inclicznik()
{
    licznik=0;
    licznik++;
    return licznik;
}

console.log(inclicznik()) //1;
console.log(inclicznik()) //2;
console.log(inclicznik()) //3;
console.log(inclicznik()) //4;
console.log(inclicznik()) //5;
console.log(inclicznik()) //6





