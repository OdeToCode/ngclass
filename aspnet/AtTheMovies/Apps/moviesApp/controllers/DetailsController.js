(function (module) {

    var DetailsController = function (movieData, $routeParams) {
        var model = this;

        var onMovie = function(movie) {
            model.movie = movie;
        }

        var activate = function() {
            var id = $routeParams.id;
            movieData.getById(id)
                     .then(onMovie);
        };

        activate();
    };

    module.controller("DetailsController", DetailsController);

}(angular.module("moviesApp")));

