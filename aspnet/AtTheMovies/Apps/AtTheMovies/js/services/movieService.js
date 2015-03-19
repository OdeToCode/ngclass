(function (module) {

    var movieService = function ($http, $q) {

        var baseUrl = "/api/movies";

        var movies = [];

        var remove = function(movie) {
            return $http.delete(baseUrl + "/" + movie.id);
        };

        var getAll = function () {
            //if (movies.length) {
            //    return $q.when(movies);
            //} else {
                return $http.get(baseUrl)
                    .then(function(response) {
                        movies = response.data;
                        return movies;
                    });
            //}
        };

        var save = function (movie) {

            if (movie.id) {
                return $http.put(baseUrl, movie);
            } else {
                return $http.post(baseUrl, movie);
            }
        };


        var getById = function (id) {
            return $http.get(baseUrl + "/" + id)
                .then(function(response) {
                    return response.data;
                });
        };

        return {
            getAllMovies: getAll,
            getById: getById,
            save: save,
            remove: remove
        };
    };

    module.factory("movieService", movieService);

}(angular.module("moviesApp")));