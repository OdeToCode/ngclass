(function(module) {

    var DetailsController = function(movieService, $routeParams, $log) {

        var model = this;

        var onMovie = function(movie) {
            model.movie = movie;
        };

        var onError = function(response) {
            model.error = response.statusText;
        }

        var initialize = function () {
            $log.info($routeParams);
            movieService.getMovieById($routeParams.id)
                        .then(onMovie, onError);
        };

        initialize();
    };

    module.controller("DetailsController", DetailsController);

}(angular.module("moviesApp")));