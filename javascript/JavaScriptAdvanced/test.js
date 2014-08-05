var data = [];

for (var k = 0; k < 3; k++) {
    function f(x)
    {
        return function() {
            console.log(x);
        }
    }
    data[k] = f(k);
}
console.log(k);
//ponizszy kod wyswietlal wartosc indeksu
data[0](); // 1
data[1](); // 2
data[2](); // 3