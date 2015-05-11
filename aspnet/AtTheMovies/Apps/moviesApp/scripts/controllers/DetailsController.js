
(function (module) {

    var DetailsController = function (movieData, $routeParams) {
        var model = this;
        var movieId = $routeParams.id;

        var onMovie = function(movie) {
            model.movie = movie;
        };

        movieData.getById(movieId)
                 .then(onMovie);

    };

    module.controller("DetailsController", DetailsController);

}(angular.module("moviesApp")));
