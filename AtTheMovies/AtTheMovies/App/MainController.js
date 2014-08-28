
angular.module("app")
    .controller("mainController", function(movieService, $interval, $scope) {
        var main = {
            greeting: "Movies!!",
            reason: "",
            movies: [],
            searchTerm: null,
            ordering: "+length",
            refreshMovies: refreshMovies
        };
        init();
        return main;

        function refreshMovies(refresh) {
            movieService.getAllMovies(refresh)
                        .then(onMoviesReceived)
                        .catch(onMoviesError);
        }

        function onMoviesReceived(movies) {
            main.movies = movies;
        }

        function onMoviesError(reason) {
            main.reason = reason;
        }

        function init() {
            refreshMovies(true);
        };
    });

