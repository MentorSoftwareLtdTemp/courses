/**
 * Created by mdylag on 07/06/2014.
 * Angular controllers, services, model
 */
/*Angular module*/
var myApp = angular.module('angularApp',[]);


/** Angular main controller */
myApp.controller('MainController', ['$scope', function($scope) {
    $scope.name = 'Main!';
}]);

/** Nested controller*/
myApp.controller('NavController', ['$scope', function($scope) {
    $scope.name = 'Main!';
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

