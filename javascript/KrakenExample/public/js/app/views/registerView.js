define(function (require) {

    var $ = require('jquery');
    var b = require('bootstrap');
    var backbone = require('backbone');
    var jqBotVal=require('jqBootstrapValidation');

    var RegisterView = Backbone.View.extend({
        el : $('#registerView'),


        events : {
            "click #btnCancel": "cancelClick"
        },

        initialize: function(){
            var _self = this;
            this.render();
        },

        render : function()
        {
            var _self = this;
            var a="form-register";
            $(function () {
                $("input").not("[type=submit]").jqBootstrapValidation();
                    console.log('Validate');

                });
            return _self;
        },
        cancelClick : function()
        {
            _self.$el.modal('hide');
            console.log('click');

        }

    });
    return new RegisterView();
});
