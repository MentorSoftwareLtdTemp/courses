define(function (require) {
    var $=require("jquery"),
    loginView = require('loginView');
    registerView = require('registerView');

    if (window.location.pathname=="/login")
    {
        //loginView.render();
    }

    var module = {
        start : function()
        {

        }
    };

    return module;

});