var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'templates/index.html',
                controller: 'MainController'
            }).
            when('/angular', {
                templateUrl: 'templates/angular.html',
                controller: 'MainController'
            }).
            when('/jswidget', {
                templateUrl: 'templates/jswidget.html',
                controller: 'MainController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
app.factory('PeopleService', [ '$http',
    function ($http) {
        var peopleService = {};

        peopleService.addPerson = function (person, collection ) {
                $http.post('/addperson.json', person);

                collection.push(person);
        };

        peopleService.getPeopleJson = function (successCall) {
            $http.get('/people.json').success(successCall);
        }

        function addPerson(params)
        {

        }

        return peopleService;

    }]);

app.controller('MainController', ['$scope','PeopleService',
    function ($scope, PeopleService) {
        $scope.btnAddText="Add person";

        $scope.person={};
        $scope.people = [];
        PeopleService.getPeopleJson(function(data) {
            $scope.people = data;
        });

        $scope.addPerson = function() {
            PeopleService.addPerson($scope.person, $scope.people);
            $scope.person={};
        }
    }]);

app.controller('NavController', ['$scope',
    function($scope) {
        $scope.home = "Home";
        $scope.angular="Angular";

    }]);





