
function Shape() {
    this.x = 0;
    this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info("Shape moved.");
};

var rect = Object.create(new Shape());
console.log(rect instanceof Shape); // true.
rect.move(1,1);
