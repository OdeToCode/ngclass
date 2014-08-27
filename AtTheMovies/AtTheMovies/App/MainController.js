
angular.module("app")
    .controller("mainController", function(movieService, $interval, $scope) {
        var main = {
            greeting: "Movies!!",
            reason: "",
            movies: []
        };
        init();
        return main;

        function onMoviesReceived(response) {
            main.movies = response.data;
        }

        function onMoviesError(reason) {
            main.reason = reason;
        }

        function init() {
            var promise = movieService.getAllMovies();
            promise.then(onMoviesReceived)
                .catch(onMoviesError);
        };
    });

