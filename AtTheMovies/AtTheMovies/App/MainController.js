
angular.module("app")
    .controller("mainController", function(movieService) {
        var main = {
            greeting: "Hello, World!",
            firstName: "Alan",
            changeName: updateGreeting,
            reason: "",
            movies: []
        };
        init();
        return main;

        function updateGreeting() {
            main.greeting = "Hello, " + main.firstName;
        }

        function onMoviesReceived(response) {
            main.movies = response.data;
        }

        function onMoviesError(reason) {
            main.reason = reason;
        }

        function init() {
            var promise = movieService.getAllMovies();
            promise.then(onMoviesReceived, onMoviesError);
        };
    });

