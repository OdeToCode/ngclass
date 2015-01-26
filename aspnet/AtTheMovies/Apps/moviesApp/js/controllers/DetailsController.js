(function() {

    var DetailsController = function($routeParams, movieData) {

        var self = this;
        var id = $routeParams.id;

        var onMovie = function(movie) {
            self.movie = movie;
        };

        movieData.getById(id)
                 .then(onMovie);
    };

    var module = angular.module("moviesApp");
    module.controller("DetailsController", DetailsController);

}());