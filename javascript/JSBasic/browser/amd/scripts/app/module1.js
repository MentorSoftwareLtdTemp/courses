

define(["./module2", "./module3"], function(module3, module2) {
        //return an object to define the "my/shirt" module.
        console.log('Loaded module1.js', new Date());
        console.log("From module1 show object module3 ", module3);
        console.log("From module2 show object module2 ", module2);

        return {
            name: "module1",
            size: "large",
            addToCart: function() {
                inventory.decrement(this);
                cart.add(this);
            }
        }
    }
);

