define(['./module'], function (services) {
    'use strict';
    return services.factory('PeopleService', ['$rootScope', '$http',

        function ($rootScope, $http) {
            console.log('factory isActive');
            var peopleService = function () {
            };
            //peopleService.people=peopleService.getPeopleJson()
            peopleService.addPerson = function (person, collection) {
                $http({
                    url: '/angular/addperson.json',
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json; ' +
                        'charset=utf-8' },
                    data: person
                });
                collection.push(person);
                //shinyNewServiceInstance.people.push( person );
                //$rootScope.$broadcast( 'people.update' , person);

            }

            peopleService.getPeopleJson = function (successCall) {
                $http({method: 'GET', url: '/angular/people.json'}).
                    success(
                    function (data, status, headers, config) {
                        successCall(data, status, headers, config);
                    })

            }

            //factory function body that constructs shinyNewServiceInstance
            return peopleService;
        }]);
});

