function Deferred() {
    var callbacks = [];
    this.done =  function(cb) {
        callbacks.push(cb);
    }
     this.resolve = function(arg) {
        for(var i = 0; i < callbacks.length; i++) {
            callbacks[i](arg);
        }
    }
}
// Now we use the deferred object
var deferred = new Deferred();
deferred.done(function(message) {
  alert(message);
});


setTimeout(function() {
  deferred.resolve('hej');
}, 30);