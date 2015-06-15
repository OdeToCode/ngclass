(function (module) {

    var ListController = function(movieData, $log) {

        var model = this;

        var onMovies = function(movies) {
            model.movies = movies;
        };

        var onError = function(response) {
            $log.error(response);
            model.error = response.data.message;
        };

        var activate = function() {
            movieData.getAllMovies()
                     .then(onMovies)
                     .catch(onError);
        };

  
        model.rateMovie = function(movie) {

            return {
                "good-movie": movie.rating > 3, 
                "bad-movie": movie.rating < 2
            };

        };

        model.decreaseRating = function (movie) {
            if (movie.rating > 1) {
                movie.rating -= 1;
            } else {
                movie.rating = 5;
            }
        }

        model.increaseRating = function(movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            } else {
                movie.rating = 1;
            }
        }

        activate();
    };

    module.controller("ListController", ["movieData", "$log", ListController]);

}(angular.module("moviesApp")));