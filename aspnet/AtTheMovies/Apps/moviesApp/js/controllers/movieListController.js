(function (module) {
    "use strict";

    var movieListController = function (movies, movieData, $log,
                                        $timeout, alerting) {
        var model = this;
        $log.info("Creating movieListController");

      
        var onMovieSaved = function () {
            model.saveMessage = "Saved the movie!";
        };

        var saveMovie = function (movie) {
            movieData.saveMovie(movie)
                     .then(onMovieSaved, alerting.errorHandler("Could not save movie"));
        };

        var initialize = function () {
            model.movies = movies;
        };

        model.orderTerm = "+title";
        model.counter = 0;
        model.searchTerm = "";
        model.movies = [];

        model.increaseRating = function (movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
                saveMovie(movie);
            }
        };

        model.isGood = function(movie) {
            return movie.rating > 3;
        };

        model.grade = function (movie) {
            var result = {
                good: movie.rating >= 4,
                bad: movie.rating <= 2
            };
            return result;
        };

        model.decreaseRating = function (movie) {
            if (movie.rating > 0) {
                movie.rating -= 1;
                saveMovie(movie);
            }
        };

        initialize();
    };

    module.controller("movieListController", movieListController);

}(angular.module("moviesApp")));