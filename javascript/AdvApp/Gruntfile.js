module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        jasmine : {
            src : [
                'node_modules/angular/angular.js',
                'node_modules/angular-route/angular-route.js',
                'node_modules/angular-mocks/angular-mocks.js',
                'public/**/*.js'],

            options : {
                specs : 'tests/**/*.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('test', ['jasmine']);

    grunt.registerTask('default', ['test']);

};