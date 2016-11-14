var angular = require('angular');
require('angular-route');
require('angular-animate');

angular.module('Site', ['ngRoute'])
  .config(($routeProvider, $locationProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: './views/home.html',
        controller: 'HomeController'
      })
      .when('/test', {
        templateUrl: './views/test.html',
        controller: 'TestController'
      })
      .otherwise({
        redirectTo: '/'
      })

      $locationProvider.html5Mode(true);
  })
