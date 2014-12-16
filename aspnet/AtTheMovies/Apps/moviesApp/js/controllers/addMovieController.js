(function (module) {

    var addMovieController = function (movieData, $location) {
        var model = this;

        model.saveMovie = function (isValid) {
            if (isValid) {
                movieData.createMovie(model.movie)
                    .then(function(movie) {
                        $location.path("/details/" + movie.id);
                    });
            } 
        };

        model.movie = {
            title: "",
            year: 2014,
            rating: 1
        };
    };

    module.controller("addMovieController", addMovieController);


}(angular.module("moviesApp")));