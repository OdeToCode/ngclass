
(function (module) {

    var EditController = function (movieData, $routeParams, $location) {
        var model = this;
        var originalMovie = {};

        var onMovie = function(movie) {
            originalMovie = angular.copy(movie);
            model.movie = movie;
        };

        var goToDetails = function() {
            $location.path("/details/" + model.movie.id);
        };

        model.cancel = function() {
            model.movie = angular.copy(originalMovie);
            return false;
        };

        model.saveMovie = function (isValid) {
            if (isValid) {
                movieData.save(model.movie)
                    .then(goToDetails);
            }
        };


        movieData.getById($routeParams.id).then(onMovie);


    };

    module.controller("EditController", EditController);

}(angular.module("moviesApp")));
