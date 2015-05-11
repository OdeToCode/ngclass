(function (module) {

    var movieData = function (n, $log) {

        var baseUrl = "/api/movies/";

        var processResponse = function(response) {
            return response.data;
        }

        var getById = function(id) {
            return n.get(baseUrl + id)
                    .then(processResponse);
        };

        var getAll = function () {
            $log.info("Fetching movies");
            return n.get(baseUrl)
                        .then(processResponse);
        };

        return {
            getById: getById,
            getAll: getAll
        };
    };

    //movieData.$inject = ["$http", "$log"];

    module.factory("movieData", ["$http", "$log", movieData]);

}(angular.module("moviesApp")));