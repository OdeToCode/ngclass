(function(module) {

    function MovieDetailController(movieData, $routeParams, alerting) {

        var model = this;
        var id = $routeParams.id;

        function onMovie(movie) {
            model.movie = movie;
        }

        movieData.getMovieById(id)
                 .then(onMovie)
                 .catch(alerting.errorHandler("Could not fetch movie"));
    }

    module.controller("MovieDetailController", MovieDetailController);

})(angular.module("movies-app"));
