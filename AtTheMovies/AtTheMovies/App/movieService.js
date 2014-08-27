(function() {
    var app = angular.module("app");
    app.service("movieService", ["$http",function($http) {

        var movieService = {
            getAllMovies: getAllMovies,
            addMovie: addMovie,
            movies: []
          
        };
        return movieService;


        function addMovie(movie) {
            return $http.post("/api/movies", movie)
                .then(function(response) {
                    movieService.movies.push(response.data);
                });
        }

        function getAllMovies() {
            return $http.get("/api/movies")
                .then(function (response) {
                        movieService.movies.splice(0);
                        angular.forEach(response.data, function (movie) {
                        movieService.movies.push(movie);
                    });
                    return movieService.movies;
            });
        }
    }]);
}());