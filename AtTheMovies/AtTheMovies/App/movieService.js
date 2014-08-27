(function() {
    var app = angular.module("app");
    app.service("movieService", function($http) {

        var movieService = {
            getAllMovies: getAllMovies
        };

        return movieService;

        function getAllMovies() {
            var promise = $http.get("http://localhost:1547/api/movies");
            return promise;
        }
    });
}());