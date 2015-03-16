(function () {

    var MainController = function ($scope, $timeout, movies, $location) {

        var self = this;

        self.searchTerm = "";
        self.orderOptions = [
            { name: "Title", option: "+title" },
            { name: "Year", option: "+year" },
            { name: "Best", option: "-rating" },
            {name: "Worst", option:"+rating"}
        ];
       // self.orderTerm = self.orderOptions[2];
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