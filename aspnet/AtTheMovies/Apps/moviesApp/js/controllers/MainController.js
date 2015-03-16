(function () {

    var MainController = function ($scope, $timeout, movies, $location) {

        var self = this

        self.movies = movies;

        self.gotoMovie = function (index) {
            var id = self.movies[index].id;
            $location.path("/details/" + id);
        };

        self.rateMovie = function (movie) {
            return {
                good: movie.rating > 3,
                bad: movie.rating < 3
            };
        };
    };

    var app = angular.module("moviesApp");
    app.controller("MainController", MainController);

}());