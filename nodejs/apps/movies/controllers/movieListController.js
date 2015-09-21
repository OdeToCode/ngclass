
(function(){
    "use strict";

    function MovieListController(n, movieData) {
        var model = this;

        n.info("MainController starting");

        function onMoviesReceived(movies) {
            model.movies = movies;
        }

        function onError(response) {
            model.errorMessage = response.data;
        }

        movieData.getAllMovies()
                 .then(onMoviesReceived)
                 .catch(onError);

        model.rateMovie = function(movie) {
            var result = {
                "good-movie": movie.rating >= 5,
                "bad-movie": movie.rating < 2
            };
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

    }

    // MainController.$inject = ["$log", "movieData"];

    angular.module("movies-app")
           .controller("MovieListController",
                ["$log", "movieData", MovieListController]);

}());
