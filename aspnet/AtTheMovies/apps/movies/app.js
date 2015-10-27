(function() {
    var module = angular.module("atTheMovies", []);

    // <div ng-controller="MainController as main"

    // var controller = new MainController();


    module.controller("MainController", function() {
        var model = this;

        model.movies = [
            { title: "Star Wars", year: 1979, rating: 5 },
            { title: "Back To The Future", year: 1984, rating: 4 },
            { title: "Top Gun", year: 1987, rating:3 }
        ];
        
        model.rateMovie = function(movie) {
                return {
                    good: movie.rating > 3,
                    bad: movie.rating < 2
                }
        }

        model.decreaseRating= function(movie) {
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
        };


    });


}());