﻿(function (module) {
    "use strict";

    var movieListController = function (movieData, $log, $scope, $timeout) {
        var model = this;
        var initialMessage = "Hello, World!";

        $log.info("Creating movieListController");

        var onMovies = function (movies) {
            model.movies = movies;
            $log.info("Got movies: ", movies);
        };

        var onError = function (error) {
            model.errorMessage = error.data.message;
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
                     .then(onMovies, onError);
        };


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

        model.message = initialMessage;
        model.orderTerm = "+title";
        model.counter = 0;
        model.searchTerm = "";

        var incrementCounter = function () {
            model.counter += 1;
            $timeout(incrementCounter, 1000);
        };
        $timeout(incrementCounter, 1000);

        $scope.$watch("list.counter", function(newVal, oldVal) {
           // model.counter += 1;
        });


        model.resetMessage = function () {
            model.message = initialMessage;
        };

        initialize();
    };

    //movieListController.$inject = ["movieData", "$log"];

    module.controller("movieListController",
        ["movieData",
          "$log", "$scope", "$timeout",
        movieListController]);

}(angular.module("moviesApp")));