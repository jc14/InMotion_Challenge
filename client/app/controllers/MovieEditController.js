let _ = require("lodash");

angular.module("Site")
  .controller("MovieEditController", function($scope, $location) {

    $scope.cancel = function() {
      $location.path("/")
    }

    $scope.submit = function() {

      console.log($scope.movie)

      let movies = JSON.parse(localStorage.getItem('movies'));

      if (!movies) movies = {};

      movies[$scope.movie.title] = {
        title: $scope.movie.title,
        year: $scope.movie.year,
        genre: $scope.movie.genre,
        actors: $scope.movie.actors,
        rating: $scope.movie.rating,
      }

      localStorage.setItem("movies", JSON.stringify(movies));
    }

    $scope.clearInputs = function() {
      $scope.movie = {};
      $scope.movie.year = 2016;
      $scope.movie.rating = 5;
    }

    $scope.clearInputs();
  })
