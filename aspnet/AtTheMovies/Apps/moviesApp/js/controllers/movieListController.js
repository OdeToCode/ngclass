(function() {

    var module = angular.module("moviesApp");

    var movieListController = function() {
        var model = this;
        var initialMessage = "Hello, World!";

        model.increaseRating = function(movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            }
        };

        model.grade = function(movie) {
            var result =  {
                good: movie.rating >= 4,
                bad: movie.rating <= 2
            };
            console.log(result);
            return result;
        };

        model.decreaseRating = function (movie) {
            if (movie.rating > 0) {
                movie.rating -= 1;
            }
        };

        model.movies = [
            { title: "Star Wars", length: 120, rating: 5, year: 1979 },
            { title: "The Hobbit", length: 580, rating: 4, year: 2012 },
            { title: "Interstellar", length: 100, rating: 4, year: 2014 }
        ];

        model.message = initialMessage;

        model.resetMessage = function() {
            model.message = initialMessage;
        };
    };

    module.controller("movieListController", movieListController);

}());