//before returning its module definition.
define(["./module4"],function () {
    //Do setup work here
    console.log('Loaded module2.js', new Date());
    return {
        name: "module2",
        value : "module2",

        show : function()
        {

        }
    }
});

