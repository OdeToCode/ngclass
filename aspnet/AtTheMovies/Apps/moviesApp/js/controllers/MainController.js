(function () {

    var MainController = function (confirmDeletion, $timeout, movies,
                                   movieData, $location, $modal, errors) {

        var self = this;

        var deleteMovie = function(movie) {
            return movieData.remove(movie)
                            .catch(errors.handle("Could not delete!"));
        };

        var refreshMovies = function() {
            movieData.getAll()
                .then(function(newMovies) { self.movies = newMovies; })
                .catch(errors.handle("Could not fetch movies"));
        };

        self.searchTerm = "";
        self.orderOptions = [
            { name: "Title", option: "+title" },
            { name: "Year", option: "+year" },
            { name: "Best", option: "-rating" },
            {name: "Worst", option:"+rating"}
        ];
        self.orderTerm = "-rating";
        self.movies = movies;

        self.gotoMovie = function (index) {
            var id = self.movies[index].id;
            $location.path("/details/" + id);
        };

        self.delete = function(movie) {
            confirmDeletion(movie)
                .then(deleteMovie)
                .then(refreshMovies);
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