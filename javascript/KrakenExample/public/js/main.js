'use strict';


requirejs.config({

    baseUrl : 'js',
    paths: {
        //libs
        'jquery' : 'lib/jquery/jquery',
        'bootstrap' : 'lib/bootstrap/bootstrap',
        'underscore' : 'lib/underscore/underscore',
        'backbone' : 'lib/backbone/backbone',
        'fuelux' : '../components/fuelux/all',
        'moment' : 'lib/moment/moment',
        'metisMenu'  : 'lib/metisMenu/jquery.metisMenu',
        'jqBootstrapValidation' : 'lib/jqBootstrapValidation/jqBootstrapValidation',
        //Views
        'loginView': 'app/views/loginView',
        'registerView': 'app/views/registerView',
        'index' : 'app/index',
        'app' : 'app/app'

        //'dust' : 'lib/dustjs-linkedin/dust-core'
        //templates
        //'loginDialog' : '../templates/LoginDialog'

    },
    shim: {
        'bootstrap': {deps: ['jquery'], exports: '$.fn.modal'},
        'metisMenu': {deps: ['jquery']},
        'jqBootstrapValidation' : {deps: ['jquery']},
        'underscore' : {exports: '_'},
        'backbone' :{deps: ['underscore','jquery']}
        //'dust' : {exports: "dust"}
        //templates
        //'loginDialog' : {deps : ['dust'], exports : 'LoginDialog'}
    }

});

//TODO: metisMenu - remove require
//TODO: Add to grunt copy all neede components
//TODO: Learn css in new project using bootstrap.

require(['jquery','fuelux','underscore','backbone','app','metisMenu','bootstrap'],
    function ($, fuelux,_,backbone,app) {
        //require('login');
        $( document ).ready(function() {
            console.log('Loaded',fuelux, $);
            $('#side-menu').metisMenu();

        });

});


// Start loading the main app file. Put all of
// your application logic in there.
//requirejs(['app/app']);
