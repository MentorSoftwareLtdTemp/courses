'use strict';


requirejs.config({

    baseUrl : 'js',
    paths: {
        'jquery' : 'lib/jquery/jquery',
        'bootstrap' : 'lib/bootstrap/bootstrap',
        'backbone' : 'lib/backbone/backbone',
        'underscore' : 'lib/underscore/underscore',
        'login': 'app/login',
        'index' : 'app/index',
        'fuelux' : '../components/fuelux',
        'moment' : 'lib/moment/moment'
    }
});



/*require(['jquery','login','index','fuelux/all','bootstrap'],
    //,'jquery','login','bootstrap'
    function ($, login, index, fuelux) {

        var app = {
            initialize: function () {
                app.login = login;
                login.init();
            }
        };

        $( document ).ready(function() {
            app.initialize();
            app.login.showLoginDialog();
            console.log('Loaded',fuelux, $, login);

        });
        $(document)
});

*/
// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/app']);
