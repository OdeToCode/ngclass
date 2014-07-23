(function() {

    var module = angular.module("atTheMovies");

    var movieService = function($http) {

        var getAllMovies = function() {

            return $http.get("/api/movies");
        };

        return {
            getAll: getAllMovies
        }
    };

    module.factory("movieDataService", movieService);


}());