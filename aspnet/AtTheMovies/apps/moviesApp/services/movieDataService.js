(function() {

    var module = angular.module("moviesApp");

    function movieData($http, $log, $q) {

        var movies = [];

        $log.info("creating movie movie data");

        var updateMovie = function(movie) {
            return $http.put("/api/movies", movie);
        };

        var getMovies = function () {

            //if (movies.length) {
            //    return $q.when(movies);
            //}

            return $http.get("/api/movies")
                        .then(function(response) {
                            movies = response.data;
                            return movies;
                        });
        };

        var getMovie = function(id) {
            return $http.get("/api/movies/" + id)
                        .then(function(response) {
                             return response.data;
                        });
        };

        var addMovie = function(movie) {
            return $http.post("/api/movies", movie)
                .then(function(response) {
                return response.data;
            });
        };

        return {
            addMovie: addMovie,
            getMovie: getMovie, 
            getMovies: getMovies,
            updateMovie: updateMovie
        };
    };

    //movieData.$inject = ["$http", "$log"];

    module.factory("movieData", movieData);

}());