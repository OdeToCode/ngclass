(function(){
    var module = angular.module("movies-app");

    module.controller("MainController", function() {

        var model = this;

        model.movies = [
                { title: "Star Wars", length:90, year:1979, rating:5 },
                { title: "Aliens", length: 120, year: 1977, rating:2 },
                { title: "Mad Max", length: 115, year: 2015, rating:3 }
        ];

        model.rateMovie = function(movie) {
            var result = {
                "good-movie": movie.rating >= 5,
                "bad-movie": movie.rating < 2
            };
            console.log(result);
            return result;
        };

        model.increaseRating = function(movie) {
            if(movie.rating < 5) {
                movie.rating += 1;
            }
            else {
                movie.rating = 1;
            }
        };

        model.decreaseRating = function(movie) {
            if(movie.rating > 1) {
                movie.rating -= 1;
            }
            else {
                movie.rating = 5;
            }
        };

    });
}());
