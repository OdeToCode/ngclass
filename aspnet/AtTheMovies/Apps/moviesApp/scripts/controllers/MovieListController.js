(function(module) {

    
    var MovieListController = function(movieData) {

        var model = this;

        var onMovies = function(movies) {
            model.movies = movies;
        };

        var onError = function (response) {           
            model.error = response.data.message;
        };


        model.searchTerm = "";
        model.orderTerm = "-rating";
        model.movies = movieData.getAll()
                                .then(onMovies, onError);

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
                bad: movie.rating <= 2
            };
        };
    };

    module.controller("MovieListController", MovieListController);

}(angular.module("moviesApp")));