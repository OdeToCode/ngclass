(function() {

    var module = angular.module("moviesApp");

   
    module.controller("MoviesListController", function (movieData) {

        var model = this;

        var onMovies = function(movies) {
                model.movies = movies;
        };

        var onError = function(response) {
            model.error = response.data.message;
        };

        model.editMovie = function(movie) {
            movie.editing = true;
        };

        model.saveEdit = function(movie) {
            delete movie.editing;
            movieData.updateMovie(movie).catch(onError);
        };

        model.increaseRating = function(movie) {
            movie.rating += 1;
            movieData.updateMovie(movie).catch(onError);
        };

        model.decreaseRating = function (movie) {
            movie.rating -= 1;
            movieData.updateMovie(movie).catch(onError);
        };

        movieData.getMovies().then(onMovies, onError);
    });


    //module.controller("MoviesListController", function($scope) {

    //    var movie = {
    //        title: "Star Wars",
    //        year: 1979
    //    }

    //    $scope.changeMessage = function() {
    //        $scope.greeting = "Bonjour!";
    //    };

    //    $scope.greeting = "Hello, World!";
    //    $scope.movie = movie;


    //});

}());