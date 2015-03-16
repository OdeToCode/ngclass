(function() {

    var MainController = function() {


        this.rateMovie = function(movie) {
            return {
                good: movie.rating > 3,
                bad: movie.rating < 3
            };
        };

        this.movies = [
            { title: "Star Wars", year: 1979, rating: 5 },
            { title: "Star Trek", year: 1989, rating: 4 },
            { title: "Borat", year: 2011, rating: 3 }
        ];


        this.changeMessage = function() {
            this.message.greeting = "Hello, Switzerland";
            this.message.currentWeather = "Warming up";
        };

        this.message = {
            greeting: "Hello, World",
            currentWeather: "Cold"
        };

    };

    var app = angular.module("moviesApp");
    app.controller("MainController", MainController);

}());