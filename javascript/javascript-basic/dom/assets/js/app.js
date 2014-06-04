/** Angular app*/
var msWebApp = angular.module('msWebApp', ['ngRoute','ngAnimate']);

msWebApp.controller('MainController', function($scope, $route, $routeParams, $location) {
    /*$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;*/
    console.log('Main',  $location.path());
    console.log('Main', $route.current);
    $scope.isTopSpaceFooter = function()
    {
        if ($location.path()=="/contact" || $location.path()=="/") {
            return false;
        }

        else {
            return true;
        }
    }
})

/** Controller for navigation */
msWebApp.controller('NavCtrl', function ($scope, $location) {
    console.log('nav', $location.path());
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    }
    $scope.goTo = function(e)
    {
        jQuery(document).ready(function($) {
            //window.scrollTo(0, 500);
        });

    }

});
msWebApp.controller('HomeCtrl', function ($scope, $location) {
    if ($location.path()=="/") {
        window.scrollTo(0, 0);
    }


    $scope.scrollPos=0;

    /*jQuery(document).ready(function($) {
        $(window).on('scroll', function () {

            // we round here to reduce a little workload
            $scope.scrollPos = Math.round($(window).scrollTop());
        });
    });*/
});



msWebApp.controller('ContactCtrl', function ($scope) {
    window.scroll(0,0);
});

msWebApp.controller('AboutCtrl', function ($scope) {
    jQuery(document).ready(function($) {
        window.scroll(0,0);
    });

});

msWebApp.controller('VmlCtrl', function ($scope) {
    window.scroll(0,0);

});

msWebApp.controller('RpsCtrl', function ($scope) {
    window.scroll(0,0);

});


/** Controller for head section */
msWebApp.controller('HeadCtrl', function ($scope) {
    $scope.lead = 'Making your ideas a reality';
    $scope.timeline = '';
});

msWebApp.controller('IntroCtrl', function ($scope) {
    $scope.introTitle='There is an art to concise, maintainable code, employing just the '
        +		'right technology at the right place, and solving a complex problem in '
        +       'a straightforward manner.';
    $scope.introDetails='';

});

msWebApp.controller('TechnologyCtrl', function ($scope) {
    window.scroll(0,0);

});

msWebApp.controller('ServicesCtrl', function ($scope) {
    window.scroll(0,0);

});



//Define Routing for app
//Uri / -> Home
//Uri /about -> About
//Uri /contact -> Contact
msWebApp.config(function($routeProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
    $routeProvider
        .when('/development', {templateUrl:'pages/development.html', controller:'ServicesCtrl'})
        .when('/courses', {templateUrl:'pages/courses.html', controller:'ServicesCtrl'})
        .when('/consulting', {templateUrl:'pages/consulting.html', controller:'ServicesCtrl'})

        .when('/tech', {templateUrl:'pages/tech.html', controller:'TechnologyCtrl'})

        .when('/vml', {templateUrl:'pages/vml.html', controller:'VmlCtrl'})
        .when('/rps', {templateUrl:'pages/rps.html', controller:'RpsCtrl'})
        .when('/about', {templateUrl:'pages/about.html', controller:'AboutCtrl'})
        .when('/contact', {templateUrl:'pages/contact.html', controller:'ContactCtrl'})
        .when('/',{templateUrl:'pages/home.html', controller:'HomeCtrl'})
        .when('/home',{templateUrl:'pages/home.html', controller:'HomeCtrl'})


});






jQuery(document).ready(function($) {

	/*$(".headroom").headroom({
		"tolerance": 20,
		"offset": 50,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		}
	});*/

    $('.team .personal').hover(
        function(){
            $(this).find('.img_wrapper .img_grayscale').stop().animate({opacity:1},200);

        },function(){
            $(this).find('.img_wrapper .img_grayscale').stop().animate({opacity:0},200);
        }
    )


});



