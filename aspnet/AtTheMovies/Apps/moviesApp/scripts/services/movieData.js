(function (module) {

    var movieData = function (n, $log) {

        var baseUrl = "/api/movies/";

        var getAll = function () {
            $log.info("Fetching movies");
            return n.get(baseUrl)
                        .then(function(response) {
                            return response.data;
                        });
        };

        return {
            getAll: getAll
        };
    };

    //movieData.$inject = ["$http", "$log"];

    module.factory("movieData", ["$http", "$log", movieData]);

}(angular.module("moviesApp")));