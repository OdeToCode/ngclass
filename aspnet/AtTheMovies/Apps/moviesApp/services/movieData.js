(function () {

    var module = angular.module("moviesApp");

    var movieData = function ($http, $q) {

        var movies = [];
        var baseUrl = "/api/movies/";

        var getById = function(id) {
            return $http.get(baseUrl + id)
                        .then(function(response) {
                            return response.data;
                    });
        };

        var save = function(movie) {
            return $http.put(baseUrl, movie);
        };

        var getAll = function () {

            //if (movies.length) {
            //    return $q.when(movies);
            //}

            return $http.get(baseUrl)
                        .then(function(response) {
                            movies = response.data;
                            return movies;
                        });
        };

        return {
            getAll: getAll,
            getById: getById,
            save: save
        };
    };

    module.factory("movieData", movieData);

}());