(function() {

    var ListController = function() {

        var model = this;

        model.rateMovie = function(movie) {
            return {
                good: movie.rating >= 4,
                bad: movie.rating <= 1
            };
        }

        model.increaseRating = function(movie) {
            if (movie.rating >= 5) {
                movie.rating = 1;
            } else {
                movie.rating += 1;
            }
        };

        model.decreaseRating = function(movie) {
            if (movie.rating <= 1) {
                movie.rating = 5;
            } else {
                movie.rating -= 1;
            }
        };

        model.movies = [
            { title: "Star Wars", year: 1979, rating:5 },
            { title: "The Gambler", year: 2014, rating:3 },
            { title: "Mad Max", year: 2015, rating:4 }
        ];

    };

    var module = angular.module("moviesApp");
    module.controller("ListController", ListController);

}());