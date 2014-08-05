define(['angular','angularResource','appmodule'], function(angular, angularResources, myApp) {

var controllers = {};
/** Angular main controller */
myApp.controller('MainController',
    ['$scope', function($scope) {
        //'PeopleService',
        //PeopleService
        $scope.message="Ala";
        /*
         $scope.name = 'Main!';
         //When AddService is run
         $scope.$on( 'people.update', function( event , person) {
         $scope.message="New person added:" + person.firstName +  " " + person.lastName ;
         });*/

    }]);

/** Nested controller*/
myApp.controller('NavController', ['$scope', function($scope) {
    console.log('Nav controller');
    $scope.name = 'Main!';
    $scope.home = 'Home';
    $scope.angular = 'Angular';

}]);

myApp.controller('AngularController',
    ['$scope','PeopleService',
        function($scope, PeopleService) {
            //,
            //PeopleService
            $scope.person={};
            $scope.btnAddText='Add';
            $scope.people =PeopleService.people;

            PeopleService.getPeopleJson(function(data) {
                $scope.people = data;
            });

            $scope.addPerson = function()
            {
                console.log($scope.person);
                PeopleService.addPerson($scope.person, $scope.people);
                //$scope.people.push($scope.person);
                $scope.person={};
            }

            /*$scope.name = 'Main!'
             $scope.masterPerson={};

             //by reference
             //$scope.people = PeopleService.people;
             */
            /*
             $scope.addPerson = function()
             {
             //$scope.masterPerson=angular.copy(person);
             PeopleService.addPerson($scope.person);
             $scope.person={};
             }*/

        }]);

    return controllers;
});
