'use strict';


requirejs.config({

    baseUrl : 'js',
    paths: {
         //libs
        'moment' : 'lib/moment',
        'jquery' : 'lib/jquery',
        'datatables' : 'lib/jquery.dataTables',
        'datatablesPlugins' : 'lib/jquery.dataTables.plugins',
        'datatables-scroller' : 'lib/dataTables.scroller',
        'bootstrap' : 'lib/bootstrap/bootstrap',
        'bootstrap-modalmanager' : 'lib/bootstrap-modalmanager',
        'bootstrap-modal' : 'lib/bootstrap-modal',
        'bootstrap-datetimepicker' : 'lib/bootstrap-datetimepicker',
        'underscore' : 'lib/underscore',
        'backbone' : 'lib/backbone',
        'calendar' : 'lib/calendar/calendar',
        'metisMenu'  : 'lib/jquery.metisMenu',
        //Vapp
        'app' : 'app/app',
        'dashboard' : 'app/dashboard'


    },

shim: {
/*     'jquery': {deps: [], exports: '$'},*/
     'bootstrap': {deps: ['jquery']},
     'bootstrap-modalmanager' : {deps: ['jquery','bootstrap'],exports: 'bootstrap-modalmanager' },
     'bootstrap-modal' : {deps: ['jquery','bootstrap','bootstrap-modalmanager'],exports: 'bootstrap-modal'},
     /*'bootstrap-datetimepicker' : {deps: ['jquery','bootstrap','moment']},*/
     'metisMenu': {deps: ['jquery']},
     'jqBootstrapValidation' : {deps: ['jquery']},
     'underscore' : {exports: '_'},
      'backbone' :{deps: ['underscore','jquery']},
     'calendar' : {deps: ['underscore','jquery','bootstrap']}
    }

});

require(['jquery','underscore','backbone','app','bootstrap'],
    function ($,_,backbone,app) {
        //require('login');
        $( document ).ready(function() {

        });

});


// Start loading the main app file. Put all of
// your application logic in there.
//requirejs(['app/app']);
