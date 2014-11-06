var myApp=angular.module('myApp',[]);

myApp.controller('MainController',
    function($window, $scope, $http, $rootScope, $location, PeopleService) {
    $scope.load = function() {
        PeopleService.loadPeople(function(data){
            $scope.persons=data;
        });
    }
    $scope.load();

    $scope.addPerson = function(person) {
        PeopleService.addPerson(person);

    }
});

myApp.service("PeopleService", function($http) {
    var PeopleService = {};
    PeopleService.addPerson= function(person) {
        console.log("add");
        console.log(person);
        $http.post('/addperson',person).success(function() {
            $window.location.href='/';
            console.log('add');
        });
    }
    PeopleService.loadPeople = function(callback) {
        console.log("load");
        $http.post('/persons').success(function (data, status, header) {
            console.log(data);
            callback(data);
        });


    }
    return PeopleService;
});




myApp.directive('myItem',function() {
    return {
        restrict: 'E',
        templateUrl: '/public/data/tblitem.html'
    };
});