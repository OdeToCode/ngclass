(function (module) {

    var movieData = function ($http, $log) {

        var baseUrl = "/api/movies/";

        var processResponse = function(response) {
            return response.data;
        }

        var save = function(movie) {
            return $http.put(baseUrl, movie)
                        .then(processResponse);
        };

        var getById = function(id) {
            return $http.get(baseUrl + id)
                    .then(processResponse);
        };

        var getAll = function () {
            $log.info("Fetching movies");
            return $http.get(baseUrl)
                        .then(processResponse);
        };

        return {
            getById: getById,
            save: save,
            getAll: getAll
        };
    };

    //movieData.$inject = ["$http", "$log"];

    module.factory("movieData", ["$http", "$log", movieData]);

}(angular.module("moviesApp")));