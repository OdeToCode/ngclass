(function(module) {

    var moviesService = function($http) {

        var getAllMovies = function () {
            return $http.get("/api/movies");
        };

        return {
            getAllMovies: getAllMovies
        };
    };

    module.factory("movieService", moviesService);

}(angular.module("common")));