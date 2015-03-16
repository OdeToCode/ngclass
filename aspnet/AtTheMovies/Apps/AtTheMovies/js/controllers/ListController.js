
(function () {

    var ListController = function () {

        var model = this;

        model.increaseRating = function(movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            } else {
                movie.rating = 1;
            }
        };

        model.decreaseRating = function(movie) {
            if (movie.rating > 1) {
                movie.rating -= 1;
            } else {
                movie.rating = 5;
            }
        }

        model.rateMovie = function(movie) {

            return {
                good: movie.rating > 4,
                bad: movie.rating < 2
            };

        };

        model.movies = [
            { title: "Star Wars", rating: 5, year: 1979 },
            { title: "Imitation Game", rating: 3, year: 2014 },
            { title: "Hottub Time Machine", rating: 1, year: 2013 }
        ];

    };

    var module = angular.module("moviesApp");
    module.controller("ListController", ListController);


}());