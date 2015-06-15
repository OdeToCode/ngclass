(function (module) {

    var movieData = function ($http, $log, $q) {

        var baseUrl = "/api/movies/";
        var movies = [];
        var parseResponse = function(response) {
            return response.data;
        };

        var save = function(movie) {
            return $http.put(baseUrl, movie)
                        .then(parseResponse);
        };

        var getById = function(id) {
            return $http.get(baseUrl + id)
                        .then(parseResponse);
        };

        var getAll = function () {

            //if (movies.length) {
            //    $log.info("returning movies from cache");
            //    return $q.when(movies);
            //}

            $log.info("Fetching movies from server");
            return $http.get(baseUrl)
                .then(parseResponse)
                .then(function(data) {
                    movies = data;
                    return movies;
                });
        };

        return {
            getAllMovies: getAll,
            getById: getById,
            save: save
        };
    };

    module.factory("movieData", ["$http", "$log", "$q", movieData]);

}(angular.module("moviesApp")));