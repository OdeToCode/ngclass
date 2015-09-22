(function(module) {
    'use strict';

    function MovieEditController(movieData, $location,
                                $routeParams, alerting) {
        var edit = this;

        edit.movie = {};
        edit.saveMovie = saveMovie;

        function movieSaved(movie) {            
            alerting.addInfo("Your movie was saved!!! :)");
            $location.path("/detail/" + movie.id);
        }

        function saveMovie(isValid) {
            if(isValid) {
                movieData.saveMovie(edit.movie)
                         .then(movieSaved)
                         .catch(alerting.errorHandler("Could not save movie"));
            }
        }

        function onMovie(movie) {
            edit.movie = movie;
        }

        function initialize() {
            var id = $routeParams.id;
            if(id) {
                movieData.getMovieById(id)
                         .then(onMovie)
                         .catch(alerting.errorHandler("Could not fetch movie"));
            }
        }

        initialize();
    }

    module.controller("MovieEditController", MovieEditController);

}(angular.module("movies-app")));
