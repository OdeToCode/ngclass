(function(module) {

    var EditController = function (movieService, $routeParams, $location) {

        var model = this;

        model.saveMovie = function(isValid) {
           if (isValid) {
               movieService.saveMovie(model.movie)
                   .then(saveSuccess);
           } 
        };

        model.cancel = function() {
            $location.path("/list");
        };

        var saveSuccess = function () {
            $location.path("/details/" + model.movie.id);
        };

        var onMovie = function(movie) {
            model.movie = movie;
        };

        var initialize = function() {
            movieService.getMovieById($routeParams.id)
                        .then(onMovie);
        };

        initialize();
    };

    module.controller("EditController", EditController);


}(angular.module("moviesApp")));