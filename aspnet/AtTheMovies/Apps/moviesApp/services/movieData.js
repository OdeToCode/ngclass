(function () {

    var module = angular.module("moviesApp");

    var movieData = function ($http) {

        var baseUrl = "/api/movies/";

        var getAll = function () {
            return $http.get(baseUrl)
                        .then(function(response) {
                            return response.data;
                        });
        };

        return {
            getAll: getAll
        };
    };

    module.factory("movieData", movieData);

}());