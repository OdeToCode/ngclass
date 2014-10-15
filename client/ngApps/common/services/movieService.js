(function(module) {

    var movieService = function($http, $q) {

        var movies = [];
        var rootUrl = "/api/movies/";

        var getAllMovies = function () {
            if (movies.length > 0) {
                return $q.when({ data: movies });
            }
            return $http.get(rootUrl)
                        .then(function(response) {
                            movies = response.data;
                            return response;
                        });
        };

        var getMovieById = function(id) {
            return $http.get(rootUrl + id);
        };

   
        var saveMovie = function(movie) {
            return $http.put(rootUrl, movie);

        };

        return {
            getAllMovies: getAllMovies,
            getMovieById: getMovieById,
            saveMovie: saveMovie
        };
    };

    module.factory("movieService", movieService);

}(angular.module("common")));
