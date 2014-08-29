(function() {
    var app = angular.module("app");
    app.service("movieService", ["$http", "$q", "$log",function($http, $q, $log) {

        var movieService = {
            getAllMovies: getAllMovies,
            getById: getById,
            addMovie: addMovie,
            save: save,
            remove: remove,
            movies: []
          
        };
        return movieService;

        function remove(id) {
            return $http.delete("/api/movies/" + id);
        }

        function save(movie) {
            if (movie.id > 0) {
                return $http.put("/api/movies/" + movie.id, movie);
            } else {
                return $http.post("/api/movies", movie);
            }
            
        }

        function getById(id) {
            var url = "/api/movies/" + id;

            return $http.get(url)
                .then(function (response) { 
                    return response.data;
                });
        }

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