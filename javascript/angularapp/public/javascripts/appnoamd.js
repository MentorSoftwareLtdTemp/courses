/**
 * Created by mdylag on 07/06/2014.
 * Angular controllers, services, model
 */
/*Angular module*/
var myApp = angular.module('app',['ngResources']);
console.log(myApp);

myApp.controller('AngularController', ['$scope', function($scope) {
    console.log("Angular");
    $scope.name = 'Main!';
    $scope.message="ddadad";
    $scope.name1="Ala2";
    $scope.person={};
    $scope.btnAddText='Add';

}]);


/** Angular main controller */
myApp.controller('MainController', ['$scope', function($scope) {
    $scope.name = 'Main!';
    $scope.message="ddadad";
    $scope.name1="Ala2";
    $scope.person={};
    $scope.btnAddText='Add';

}]);

/** Nested controller*/
myApp.controller('NavController', ['$scope', function($scope) {
    $scope.name = 'Main!';
    $scope.home = 'Home';
    $scope.angular = 'Angular';
}]);


/** Angular service */
myApp.service( 'Book', [ '$rootScope', function( $rootScope ) {
    var service = {
        people: [
            { firstNmae: "Jan", lastName: "Kowalski" },
            { firstNmae: "Alicja", lastName: "Kowalska" }
        ],

        addPerson: function ( book ) {
            service.books.push( book );
            $rootScope.$broadcast( 'books.update' );
        }
    }

    return service;
}]);



/** Angular routes */

