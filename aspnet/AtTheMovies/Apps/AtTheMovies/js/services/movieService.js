(function (module) {

    var movieService = function ($http, $q) {

        var baseUrl = "/api/movies";

        var movies = [];

        var getAll = function () {
            if (movies.length) {
                return $q.when(movies);
            } else {
                return $http.get(baseUrl)
                    .then(function(response) {
                        movies = response.data;
                        return movies;
                    });
            }
        };

        var getById = function(id) {
            return $http.get(baseUrl + "/" + id)
                .then(function(response) {
                    return response.data;
                });
        };

        return {
            getAllMovies: getAll,
            getById: getById
        };
    };

    module.factory("movieService", movieService);

}(angular.module("moviesApp")));