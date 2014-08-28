(function() {
    var app = angular.module("app");
    app.service("movieService", ["$http", "$q", "$log",function($http, $q, $log) {

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

        function getAllMovies(refresh) {
            if (!refresh && movieService.movies.length > 0) {
                $log.info("return from cache");
                return $q.when(movieService.movies);
            }

            $log.info("calling API");
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