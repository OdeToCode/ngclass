(function (module) {
    "use strict";

    var MoviesController = function (movies, $log, $location) {
        var model = this;

        model.counter = 0;
        model.searchTerm = "";
        model.orderTerm = "-rating";
        model.movies = movies;
  
        model.increaseRating = function (movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            }
        };

        model.decreaseRating = function (movie) {
            movie.rating -= 1;
        };

        model.gotoDetails = function (movie) {
            $location.path("/details/" + movie.id);
        };

        //var onMovies = function (movies) {
        //    model.movies = movies;
        //};

        //var onMoviesError = function (response) {
        //    model.error = "Sorry, could not get movies!";
        //};

        //var activate = function () {

        //    movieService.getAllMovies()
        //                .then(onMovies, onMoviesError);
        //};

        //activate();
    };

    module.controller("MoviesController", MoviesController);

}(angular.module("moviesApp")));