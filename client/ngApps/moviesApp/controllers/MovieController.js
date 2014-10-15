(function (module) {

    var MoviesController = function (movieService, $log, $location, $timeout, $scope) {
        var model = this;

        model.counter = 0;

        model.searchTerm = "";
        model.orderTerm = "-rating";
        $scope.$watch("list.counter", function () {
            $log.info("counter changed to " + model.counter);
        });


        var incrementCounter = function () {
            model.counter += 1;
            $timeout(incrementCounter, 1000);
        };
        $timeout(incrementCounter, 1000);

        model.message = "Hello World!";

        model.increaseRating = function (movie) {
            movie.rating += 1;
        };

        model.decreaseRating = function (movie) {
            movie.rating -= 1;
        };

        model.gotoDetails = function (movie) {
            $location.path("/details/" + movie.id);
        };

        var onMovies = function (response) {
            model.movies = response.data;

        };

        var onMoviesError = function (response) {
            model.error = "Sorry, could not get movies!";
        };

        var activate = function () {

            movieService.getAllMovies()
                        .then(onMovies, onMoviesError);
        };

        activate();
    };

    module.controller("MoviesController", MoviesController);

}(angular.module("moviesApp")));