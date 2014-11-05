define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('AngularController',
        ['$scope','PeopleService',function ($scope,PeopleService) {
        $scope.message="ddadad";
        $scope.name1="Ala2";
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

            console.log(PeopleService);
    }]);
});

