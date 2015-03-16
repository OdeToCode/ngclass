(function () {

    var ListController = function (movieService) {

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

        var onMovieData = function(movies) {
            model.movies = movies;
        };

        var onError = function(response) {
            model.error = "The error code from the server was " + response.status;
        };

        movieService.getAllMovies()
                    .then(onMovieData, onError);

    };

    var module = angular.module("moviesApp");
    module.controller("ListController", ["movieService", ListController]);


}());