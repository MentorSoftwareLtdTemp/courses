var myApp=angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/public/fragments/list.html',
            controller: 'MainController'
        })
        .when('/add', {
            templateUrl: '/public/fragments/add.html',
            controller: 'MainController'
        }). otherwise({
            redirectTo: '/'
        });;
});
myApp.run(function($rootScope, $location){
    $rootScope.isUrl = function(url) {
        if ($location.url()==url) return true;
    }
    $rootScope.$on('$locationChangeSuccess', function(){

        if ($location.url()=="/") {
            $rootScope.isHome = true;
            $rootScope.isAdd = false;

        } else {
            $rootScope.isAdd = true;
            $rootScope.isHome = false;

        }
    });
});


myApp.controller('MainController',
    function($window, $scope, $http, $rootScope, $location, PeopleService) {
        $scope.main="main";
        console.log('Main controller');
    $scope.load = function() {
        PeopleService.loadPeople(function(data){
            $scope.persons=data;
        });
    }
        if ($location.url()=="/")
            $scope.load();

    $scope.addPerson = function(person) {
        PeopleService.addPerson(person);

    }
});

myApp.service("PeopleService", function($http, $location) {
    var PeopleService = {};
    PeopleService.addPerson= function(person) {
        console.log("add");
        console.log(person);
        $http.post('/addperson',person).success(function() {
            $location.url("/");
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




myApp.directive('tblItem',function() {
    return {
        restrict: 'E',
        templateUrl: '/public/data/tblitem.html',
        scope : {
            items : "="
        }

    };
});