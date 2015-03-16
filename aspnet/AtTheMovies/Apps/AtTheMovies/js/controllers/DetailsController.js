(function(module) {

    var DetailsController = function($routeParams, movieService) {

        var model = this;

        var onMovieData = function(movie) {
            model.movie = movie;
        }

        movieService.getById($routeParams.id)
                   .then(onMovieData);

    };

    module.controller("DetailsController", DetailsController);

}(angular.module("moviesApp")));