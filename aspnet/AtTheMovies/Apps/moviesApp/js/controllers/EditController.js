(function(module) {

    var EditController = function(movieData, $routeParams, $location,errors) {

        var self = this;
        var id = $routeParams.id;

        var onMovie = function(movie) {
            self.movie = movie;
            self.originalMovie = angular.copy(self.movie);
        }

        var goToDetails = function() {
            $location.path("/details/" + self.movie.id);
        };

        self.reset = function() {
            self.movie = angular.copy(self.originalMovie);
        };

        self.save = function(isValid) {

            if (isValid) {
                movieData.save(self.movie)
                    .then(goToDetails)
                    .catch(errors.handle("We could not save your movie!"));
            }
        };

        movieData.getById(id)
                 .then(onMovie);

    };

    module.controller("EditController", EditController);


}(angular.module("moviesApp")));