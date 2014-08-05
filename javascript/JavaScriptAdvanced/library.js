(function(root) {
    console.log(root);
    var mylib = function(obj) {
        console.log('init');
        if (obj instanceof _)
            return obj;
        if (!(this instanceof mylib))
            return new mylib(obj);
        this._wrapped = obj;
    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = mylib;
        }
        exports.mylib = mylib;
    } else {
        root.mylib = mylib;
    }

    mylib.print = function() {

    }

    return mylib;


})(this);

console.log(exports);


