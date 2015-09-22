(function(module) {
    'use strict';

    function MovieEditController(movieData, $location, $routeParams) {
        var edit = this;

        edit.movie = {};
        edit.saveMovie = saveMovie;

        function movieSaved(movie) {
            $location.path("/detail/" + movie.id);
        }

        function saveMovie(isValid) {
            if(isValid) {
                movieData.saveMovie(edit.movie)
                         .then(movieSaved)
            }
        }

        function onMovie(movie) {
            edit.movie = movie;
        }

        function initialize() {
            var id = $routeParams.id;
            if(id) {
                movieData.getMovieById(id)
                         .then(onMovie);
            }
        }

        initialize();
    }

    module.controller("MovieEditController", MovieEditController);

}(angular.module("movies-app")));
