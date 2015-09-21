(function() {

    var module = angular.module("movies-app");

    var movieData = function($http) {

        var getById = function(id) {
            return {};
        };

        var getAll = function() {
            return $http.get("/api/movies")
                        .then(function(response){
                            return response.data;
                         });
        };

        return {
            getMovieById: getById,
            getAllMovies: getAll
        };

    };

    module.factory("movieData", movieData);

}());
