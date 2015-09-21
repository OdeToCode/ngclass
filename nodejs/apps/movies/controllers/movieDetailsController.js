(function(module) {

    function MovieDetailController(movieData, $routeParams) {

        var model = this;
        var id = $routeParams.id;

        function onMovie(movie) {
            model.movie = movie;
        }

        movieData.getMovieById(id)
                 .then(onMovie);
    }

    module.controller("MovieDetailController", MovieDetailController);

})(angular.module("movies-app"));
