var angular = require('angular');
require('angular-route');
require('angular-animate');

angular.module('Site', ['ngRoute'])
  .config(($routeProvider, $locationProvider) => {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeController'
      })
      .when('/test', {
        templateUrl: 'test.html',
        controller: 'TestController'
      })
      .otherwise({
        redirectTo: '/'
      })

      $locationProvider.html5Mode(true);
  })

  // Controller init
  require('./controllers/HomeController.js')
  require('./controllers/TestController.js')
