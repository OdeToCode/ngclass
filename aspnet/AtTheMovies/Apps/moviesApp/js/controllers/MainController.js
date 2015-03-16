(function() {

    var MainController = function(movieData, $log) {

        var self = this;

        self.rateMovie = function(movie) {
            return {
                good: movie.rating > 3,
                bad: movie.rating < 3
            };
        };

        movieData.getAll()
            .then(function (response) {

                self.movies = response.data;
                $log.info(self);
            });


        self.changeMessage = function() {
            self.message.greeting = "Hello, Switzerland";
            self.message.currentWeather = "Warming up";
        };

        self.message = {
            greeting: "Hello, World",
            currentWeather: "Cold"
        };

    };

    var app = angular.module("moviesApp");
    app.controller("MainController", MainController);

}());