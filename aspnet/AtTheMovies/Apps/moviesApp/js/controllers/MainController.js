(function() {

    var MainController = function(movieData, $log) {

        var self = this;

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

    };
    //MainController.$inject = ["movieData", "$log"];

    var app = angular.module("moviesApp");
    app.controller("MainController", MainController);

}());