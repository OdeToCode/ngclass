(function() {

    var MainController = function(movieData, $log) {

        var self = this;

        var array = [1, 2, 3, 4];


        $log.info("Controller created");
        var onMovies = function(movies) {
            self.movies = movies;
        };

        var onError = function(response) {
            self.error = response.statusText;
        };

        self.rateMovie = function(movie) {
            return {
                good: movie.rating > 3,
                bad: movie.rating < 3
            };
        };

        movieData.getAll()
            .then(onMovies, onError);


        self.changeMessage = function() {
            self.message.greeting = "Hello, Switzerland";
            self.message.currentWeather = "Warming up";
        };

        self.message = {
            greeting: "Hello, World",
            currentWeather: "Cold"
        };

    };
    //MainController.$inject = ["movieData", "$log"];

    var app = angular.module("moviesApp");
    app.controller("MainController", MainController);

}());