define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('NavController', ['$scope',function ($scope) {
        $scope.name = 'Main!';
        $scope.home = 'Home';
        $scope.angular = 'Angular';

    }]);
});

