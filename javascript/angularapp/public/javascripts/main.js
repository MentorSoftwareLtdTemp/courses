//http://www.startersquad.com/blog/angularjs-requirejs/
require.config({
    paths: {
        angular: '../bower_components/angular/angular',
        'angularResource': '../bower_components/angular/angular-resources',
        domReady: '../bower_components/requirejs-domready/domReady',
        jquery : '../bower_components/jquery/dist/jquery'
    },
    shim: {
        'angular' : {'exports' : 'angular'}
    },

    // kick start application
    deps: ['./boot']

});

