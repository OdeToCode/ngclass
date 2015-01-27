(function() {

    var module = angular.module("moviesApp");


   


    var DetailsController = function($routeParams, movieData) {

    
        var self = this;
        var id = $routeParams.id;

        var onMovie = function(movie) {
            self.movie = movie;
        };

        movieData.getById(id)
                 .then(onMovie);
    };

    
    module.controller("DetailsController", DetailsController);

}());