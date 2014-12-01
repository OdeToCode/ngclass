
angular.module("moviesApp").controller("AddMovieController", function($log, movieData) {

    var model = this;
    model.movie = {
        title: "",
        rating: 1,
        year: 2015
    };

    model.saveMovie = function(isValid) {
        if (isValid) {
            $log.info("Save movie");
        } else {
            $log.warn("Ivalid movie form");
        }
    };


});
