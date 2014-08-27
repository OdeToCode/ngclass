(function() {
    var app = angular.module("app");
    app.service("movieService", ["$http",function($http) {

        var movieService = {
            getAllMovies: getAllMovies,
            addMovie: addMovie
        };

        return movieService;

        function addMovie(movie) {
            return $http.post("/api/movies", movie);
        }

        function getAllMovies() {
            var promise = $http.get("/api/movies");
            return promise;
        }
    }]);
}());