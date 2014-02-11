define(['jquery','./index','bootstrap'],function ($, ind) {


    var login = {};
    login.init = function()
    {
        this.btnSignin = $("#btnSignin");
        this.btnCancel = $('#btnCancel')
        this.btnCancel.click(function(eventObject)
        {
            $.get("/");
            //alert( "Handler for .click() called." );
        });
    },

        login.showLoginDialog = function()
        {
            var modal = $('#loginDialog');
            modal.css('margin-top', 110);
            modal.modal();
            console.log("Login loaded");
        }

    return login;
});
