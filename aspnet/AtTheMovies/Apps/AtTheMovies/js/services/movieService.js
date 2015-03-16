(function (module) {

    var movieService = function ($http) {

        var getAll = function () {
            return $http.get("/api/movies")
                        .then(function(response) {
                            return response.data;
                        });
        };

        return {
            getAllMovies: getAll
        };
    };

    module.factory("movieService", movieService);

}(angular.module("moviesApp")));