(function () {

    var mainController = function($http) {

        var model = this;

        var onMovies = function(response) {
            model.movies = response.data;
        };

        var onError = function(response) {
            model.error = response.statusText;
        };

        model.message = "Hello, World!";
        model.changeMessage = function() {
            model.message = "Apex";
        };

        model.rateMovie = function(movie) {
            return {
                good: movie.rating > 4,
                bad: movie.rating < 4
            };
        };

        $http.get("/api/movies")
             .then(onMovies, onError);
    };

    angular.module("moviesApp").controller("mainController", mainController);

}());