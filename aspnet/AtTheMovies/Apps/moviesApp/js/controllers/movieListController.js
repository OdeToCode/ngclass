(function (module) {
    "use strict";

    var movieListController = function (movieData, $log, $scope,
                                        $timeout, alerting) {
        var model = this;
        $log.info("Creating movieListController");

        var onMovies = function (movies) {
            model.movies = movies;
            $log.info("Got movies: ", movies);
        };

        var onMovieSaved = function () {
            model.saveMessage = "Saved the movie!";
        };

        var saveMovie = function (movie) {
            movieData.saveMovie(movie)
                     .then(onMovieSaved, onError);
        };

        var initialize = function () {
            movieData.getAllMovies()
                     .then(onMovies)
                     .catch(alerting.errorHandler("Failed to load movies"));
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