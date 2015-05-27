(function() {

    var ListController = function($log, movieData, $location) {

        var model = this;

        var onError = function(response) {
            model.errorMessage = response.data.message;
        };

        var onMovies = function(movies) {
            model.movies = movies;
        };

        model.searchTerm = "";
        model.orderTerm = "-rating";
        model.rateMovie = function(movie) {
            return {
                good: movie.rating >= 4,
                bad: movie.rating <= 1
            };
        }

        model.increaseRating = function(movie) {
            if (movie.rating >= 5) {
                movie.rating = 1;
            } else {
                movie.rating += 1;
            }
        };

        model.decreaseRating = function(movie) {
            if (movie.rating <= 1) {
                movie.rating = 5;
            } else {
                movie.rating -= 1;
            }
        };

        model.edit = function(id) {
            $location.path("/edit/" + id);
        };

        movieData.getAll()
                 .then(onMovies, onError);

    };

    //ListController.$inject = ["movieData"];

    var module = angular.module("moviesApp");
    module.controller("ListController",
        ["$log", "movieData", "$location", ListController]);

}());