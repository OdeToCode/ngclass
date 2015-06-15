(function (module) {

    var DetailsController = function (movieData, $routeParams, alerting) {
        var model = this;

        var onMovie = function(movie) {
            model.movie = movie;
        }

        var activate = function () {

            

            var id = $routeParams.id;
            alerting.addInfo("Fetching movie " + id);
            movieData.getById(id)
                    .then(onMovie)
                    .catch(alerting.handle("Could not get the movie " + id));
        };

        activate();
    };

    module.controller("DetailsController", DetailsController);

}(angular.module("moviesApp")));

