(function(module) {

    var EditController = function($routeParams, movieService, $location) {

        var model = this;

        var onMovie = function(movie) {
            model.movie = movie;
        };

        var saveComplete = function() {
            $location.path("#/list");
        };

        model.save = function() {
            movieService.save(model.movie)
                        .then(saveComplete);
        };


        movieService.getById($routeParams.id)
            .then(onMovie);


    };

    module.controller("EditController", EditController);


}(angular.module("moviesApp")));