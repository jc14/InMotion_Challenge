let _ = require("lodash");
_.getIndexBy = function (array, key, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return i;
    }
  }
  return -1;
}

angular.module("Site")
  .controller("MovieEditController", function($scope, $location) {

    $scope.cancel = function() {
      $location.path("/")
    }

    // Will run on
    $scope.submit = function() {
      // Grab movie's from local storage
      let movies = JSON.parse(localStorage.getItem('movies'));

      // If movies doesn't exsist in the local storage then point movies to an empty array
      if (!movies) movies = [];

      let index = _.getIndexBy(movies, "title", $scope.movie.title);
      if (index !== -1) {
        movies[index] = {
          title: $scope.movie.title,
          year: $scope.movie.year,
          genre: $scope.movie.genre,
          actors: $scope.movie.actors,
          rating: $scope.movie.rating,
        }
      } else {
        movies.push({
          title: $scope.movie.title,
          year: $scope.movie.year,
          genre: $scope.movie.genre,
          actors: $scope.movie.actors,
          rating: $scope.movie.rating,
        });
      }
      // Put modified movies array into storage
      localStorage.setItem("movies", JSON.stringify(movies));
      $scope.clearInputs();
    }

    $scope.clearInputs = function() {
      $scope.movie = {
        year: 2016,
        rating: 5,
      };
    }

    // Clearing inputs on open of this page
    $scope.clearInputs();
    // Check to see if a movie has been selected to edit.
    // If so then fill the inputs with that movie's data.
    let titleToEdit = localStorage.getItem("movieToEdit");
    if (titleToEdit) {

      let movies = JSON.parse(localStorage.getItem('movies'));
      let index = _.getIndexBy(movies, "title", titleToEdit);
      let movie = movies[index];

      $scope.movie = movie;

      localStorage.removeItem("movieToEdit");
    }
  })
