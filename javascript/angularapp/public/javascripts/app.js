define([
        'angular',
    './services/index',
    './controllers/index',
        './directives/index',
        './filters/index'
], function (ng) {
        'use strict';
         return ng.module('app', [
             'app.services',
             'app.controllers',
             'app.filters',
             'app.directives'
         ]);
     });