function Hero()
{
    this.name = 'Name in hero'
};
Hero.prototype=protoObj;

var h = new Hero();
console.log(Hero.prototype);
console.log(protoObj.isPrototypeOf(h));
console.log(h.name);
delete h.name;
console.log(h.name);
h.name="New name in object";
console.log(h.name);
protoObj.w=10;
console.log(h.w);

Hero.prototype.x = 10;
console.log(h, Hero.prototype);

for (i in h)
{
    console.log("Property ", i,
        " from prototype", h.hasOwnProperty(i),
    "value: ",h[i] );
}

console.log(h.name);
delete h.name;
console.log(h.name);
*/