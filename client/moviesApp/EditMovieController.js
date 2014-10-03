(function() {

    var app = angular.module("moviesApp");

    app.controller("EditMovieController", function (
        $routeParams, movieService, $location) {

        var model = this;

        model.saveEdit = function(isValid) {
            if (isValid) {
                movieService.updateMovie(model.movie);
                $location.path("/list");
            }
        };

        model.cancelEdit = function() {
            $location.path("/list");
        }

        var onError = function() {

        };

        var onMovie = function(movie) {
            model.movie = movie;
        };

        var initialize = function() {
            var id = $routeParams.id;
            movieService.getMovieById(id)
                .then(onMovie, onError);
        };

        initialize();

    });

}())