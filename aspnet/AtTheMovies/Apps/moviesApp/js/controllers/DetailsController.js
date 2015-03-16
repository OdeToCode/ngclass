(function() {

    var module = angular.module("moviesApp");


   


    var DetailsController = function($routeParams, movieData, $sce) {

    
        var self = this;
        var id = $routeParams.id;


        var onMovie = function(movie) {
            self.movie = movie;
        };


        //self.getTrustedTitle = function() {
        //    return $sce.getTrustedHtml(self.movie.title);
        //};

        movieData.getById(id)
                 .then(onMovie);
    };

    
    module.controller("DetailsController", DetailsController);

}());