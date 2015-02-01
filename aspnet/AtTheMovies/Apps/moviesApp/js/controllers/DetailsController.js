(function() {

    var module = angular.module("moviesApp");

    var DetailsController = function($routeParams, movieData, errors, $sce) {

    
        var self = this;
        var id = $routeParams.id;


        var onMovie = function(movie) {
            self.movie = movie;
        };


        //self.getTrustedTitle = function() {
        //    return $sce.getTrustedHtml(self.movie.title);
        //};

        movieData.getById(id)
            .then(onMovie)
            .catch(errors.handle("Could not fetch the movie!"));
    };
    
    module.controller("DetailsController", DetailsController);

}());