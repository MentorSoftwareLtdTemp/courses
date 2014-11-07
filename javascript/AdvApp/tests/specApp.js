describe("A suite", function() {
    beforeEach(
        module('myApp')
    );

    it("should contains variable main in MainController", inject(function($controller, $rootScope) {
        $scope = $rootScope.$new();
        var ctrl=$controller('MainController',{$scope:$scope});
        expect($scope.main).toBe('main');
    }));
});