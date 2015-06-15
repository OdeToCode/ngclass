(function() {

    // viewmodel
    var ListController = function() {

        var model = this;
        model.movies = [

            { id: 1, title: "Star Wars", releaseYear: 1977, rating: 5 },
            { id: 2, title: "Weekend At Bernie's", releaseYear:1990, rating: 3},            
            { id: 3, title: "Home Alone", releaseYear: 1991, rating: 4 }
        ];

        model.rateMovie = function(movie) {

            return {
                "good-movie": movie.rating > 3, 
                "bad-movie": movie.rating < 2
            };

        };

        model.decreaseRating = function (movie) {
            if (movie.rating > 1) {
                movie.rating -= 1;
            } else {
                movie.rating = 5;
            }
        }

        model.increaseRating = function(movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            } else {
                movie.rating = 1;
            }
        }

    };

    var module = angular.module("moviesApp");
    module.controller("ListController", ListController);

}());