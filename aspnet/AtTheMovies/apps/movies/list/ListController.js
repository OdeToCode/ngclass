(function () {

    var module = angular.module("atTheMovies");

    var ListController = function (movieData, $log, alerting, confirmDeleteMovie) {
        var model = this;

        model.searchTerm = "";
        model.orderTerm = "-rating";

        model.deleteMovie = function(movie) {
            confirmDeleteMovie(movie).then(doDeleteMovie);
        }

        model.rateMovie = function (movie) {
            return {
                good: movie.rating > 3,
                bad: movie.rating < 2
            }
        }

        model.decreaseRating = function (movie) {
            if (movie.rating > 1) {
                movie.rating -= 1;
            } else {
                movie.rating = 5;
            }
        }
        model.increaseRating = function (movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            } else {
                movie.rating = 1;
            }
        };

        function onMovies(movies) {
            model.movies = movies;
        }

        function onError() {
            alerting.addError("Not able to fetch movies!");
        }

        function initialize() {
            movieData.getAll()
                .then(onMovies, onError);
        }

        function doDeleteMovie(movie) {
            movieData.delete(movie).then(initialize);
        }

        $log.info("ListCOntroller starting!");

        initialize();
    };

    module.controller("ListController",  ListController);

}());