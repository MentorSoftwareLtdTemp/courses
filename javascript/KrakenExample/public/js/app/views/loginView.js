define(function (require) {

    var $ = require('jquery');
    var b = require('bootstrap');
    var backbone = require('backbone');

    var LoginView = Backbone.View.extend({
        el : $('#loginDialog'),

        events : {
           "click #btnCancel":          "cancelClick"
        },

        initialize: function(){
            var _self = this;
            //this.render();
        },

        render : function()
        {
            var _self = this;
            _self.$el.modal('show');

            return _self;
        },
        cancelClick : function()
        {
            _self.$el.modal('hide');
            console.log('click');

        }

    });
    return new LoginView();
});
