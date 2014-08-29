
angular.module("app")
    .controller("mainController", function(movieService) {
        var main = {
            greeting: "Movies!!",
            reason: "",
            movies: [],
            searchTerm: null,
            ordering: "+length",
            refreshMovies: refreshMovies,
            close: close,
            remove: remove
        };
        init();
        return main;

        function close() {
            main.reason1 = null;
        }

        function remove(id) {
            movieService.remove(id)
                .then(refreshMovies(true))
                .catch(onMoviesError);
        }

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

