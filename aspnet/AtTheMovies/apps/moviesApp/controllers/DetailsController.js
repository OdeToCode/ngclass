(function () {

    var module = angular.module("moviesApp");

    var DetailsController = function($location, $routeParams, movieData) {

        var model = this;
        var id = $routeParams.id;

        var onMovie = function(movie) {
            model.movie = movie;
        };

        model.goToList = function() {
            $location.path("/list");
        };

        movieData.getMovie(id)
                 .then(onMovie);


    };

    module.controller("DetailsController", DetailsController);


}());