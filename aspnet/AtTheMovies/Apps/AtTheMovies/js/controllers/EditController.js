(function(module) {

    var EditController = function($routeParams, movieService, $location, alerting) {

        var model = this;
        var originalMovie = {};

        var onMovie = function(movie) {
            model.movie = movie;
            originalMovie = angular.copy(model.movie);
        };

        var saveComplete = function () {
            alerting.addInfo("Movie is saved!");
            $location.path("/list");
        };

        var init = function () {
            if ($routeParams.id) {
                movieService.getById($routeParams.id)
                    .then(onMovie);
            }
        };

        model.movie = {};
        model.save = function (isValid) {
            if (isValid && !angular.equals(originalMovie, model.movie)) {
                movieService.save(model.movie)
                    .then(saveComplete);
            }
            if (isValid && angular.equals(originalMovie, model.movie)) {
                var path = "/details/" + model.movie.id;                
                $location.path(path);
            }
        };

        init();
    };

    module.controller("EditController", EditController);


}(angular.module("moviesApp")));