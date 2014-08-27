
angular.module("app")
    .controller("mainController", function(movieService, $interval, $scope) {
        var main = {
            greeting: "Movies!!",
            reason: "",
            movies: [],
            searchTerm: null,
            ordering: "+length"
        };
        init();
        return main;

        function onMoviesReceived(movies) {
            main.movies = movies;
        }

        function onMoviesError(reason) {
            main.reason = reason;
        }

        function init() {
            movieService.getAllMovies()
                        .then(onMoviesReceived)
                        .catch(onMoviesError);
        };
    });

