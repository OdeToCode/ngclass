(function(module) {

    var EditController = function(movieData, $routeParams, $location) {

        var self = this;
        var id = $routeParams.id;

        var onMovie = function(movie) {
            self.movie = movie;
        }

        var goToDetails = function() {
            $location.path("/details/" + self.movie.id);
        };

        self.save = function(isValid) {

            if (isValid) {
                movieData.save(self.movie)
                         .then(goToDetails);
            }
        };

        movieData.getById(id)
                 .then(onMovie);

    };

    module.controller("EditController", EditController);


}(angular.module("moviesApp")));