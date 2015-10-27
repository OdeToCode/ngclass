(function(module) {

    function DetailController(movieData, $routeParams) {

        var model = this;

        movieData.getById($routeParams.id)
            .then(function(movie) {
                model.movie = movie;
            });

    }


    module.controller("DetailController", DetailController);

}(angular.module("atTheMovies")));