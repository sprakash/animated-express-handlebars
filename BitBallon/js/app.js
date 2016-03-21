

var animateApp = angular.module('animateApp',['ui.router','ngAnimate']);

// animateApp.config(function($routeProvider) {
//     $routeProvider
//     	.when('/', {
//     		templateUrl: 'home.html',
//             controller: 'mainController'
//     	})
//     	.when('/templates', {
//     		templateUrl: 'templates/code.html',
//             controller: 'aboutController'
//     	})
//     	.when('/templates', {
//     		templateUrl: 'templates/theater.html',
//             controller: 'contactController'
//     	});

// });

animateApp.config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'templates/home.html'
        })
        .state('code', {
            url:'/',
            templateUrl: 'templates/code.html'
        })
        .state('theater', {
            url:'/',
            templateUrl:'templates/theater.html'
        });
}]);

animateApp.controller('mainController', function($scope) {
    $scope.pageClass = 'home';

    
});

animateApp.controller('codeController', function($scope) {
    $scope.pageClass = 'code';
});

animateApp.controller('theaterController', function($scope) {
    $scope.pageClass = 'theater';
});





