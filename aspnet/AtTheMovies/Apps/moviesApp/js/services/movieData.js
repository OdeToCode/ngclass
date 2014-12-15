(function(module) {

    var movieData = function($http) {

        var saveMovie = function(movie) {
            return $http.put("/api/movies", movie);
        };

        var getAllMovies = function() {
            return $http.get("/api/movies")
                        .then(function (response) {
                            return response.data;
                        });
        };
        return {
            getAllMovies: getAllMovies,
            saveMovie: saveMovie
        };
    };

    module.factory("movieData", movieData);

}(angular.module("moviesApp")));