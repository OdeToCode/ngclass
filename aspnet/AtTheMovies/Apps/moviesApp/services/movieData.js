(function (module) {

    var movieData = function ($http, $log) {

        var baseUrl = "/api/movies";

        var getAll = function () {

            $log.info("Getting all movies!");
            return $http.get(baseUrl)
                        .then(function(response) {
                            return response.data;
                        });
        };

        return {
            getAllMovies: getAll
        };
    };

    module.factory("movieData", ["$http", "$log", movieData]);

}(angular.module("moviesApp")));