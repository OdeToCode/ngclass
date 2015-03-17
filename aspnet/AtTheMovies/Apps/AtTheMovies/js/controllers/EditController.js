(function(module) {

    var EditController = function($routeParams, movieService, $location) {

        var model = this;

        var onMovie = function(movie) {
            model.movie = movie;
        };

        var saveComplete = function() {
            $location.path("#/list");
        };

        var init = function () {
            if ($routeParams.id) {
                movieService.getById($routeParams.id)
                    .then(onMovie);
            }
        };

        model.movie = {};
        model.save = function (isValid) {
            if (isValid) {
                movieService.save(model.movie)
                    .then(saveComplete);
            }
        };

        init();
    };

    module.controller("EditController", EditController);


}(angular.module("moviesApp")));