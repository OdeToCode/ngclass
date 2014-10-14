(function(module) {

    var MoviesController = function(movieService, $log) {
        var model = this;

        model.message = "Hello World!";

        var onMovies = function(response) {
            model.movies = response.data;
        };

        var onMoviesError = function(response) {
            model.error = "Sorry, could not get movies!";
        };

        var activate = function () {
            $log.info("activate MoviesController");

            movieService.getAllMovies()
                        .then(onMovies, onMoviesError);
        };

        activate();
    };

    module.controller("MoviesController", MoviesController);

}(angular.module("moviesApp")));