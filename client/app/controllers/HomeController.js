let _ = require('lodash');

angular.module("Site")
  .controller("HomeController", function($scope, $location) {
    $scope.movies = JSON.parse(localStorage.getItem("movies"));

    $scope.editMovie = function(title) {
      if (title) {
        localStorage.setItem("movieToEdit", title);
      }

      $location.path('movieEdit')
    }
  })
