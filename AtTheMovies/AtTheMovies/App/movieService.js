(function() {
    var app = angular.module("app");
    app.service("movieService", ["$http",function($h) {

        var movieService = {
            getAllMovies: getAllMovies
        };

        return movieService;

        function getAllMovies() {
            var promise = $h.get("/api/movies");
            return promise;
        }
    }]);
}());