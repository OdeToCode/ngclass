(function() {

    var module = angular.module("movies-app");

    function processResponse(response){
        return response.data;
     }

    function movieData($http) {

        var baseUrl = "/api/movies/";

        var getById = function(id) {
            var url = baseUrl + id;
            return $http.get(url)
                        .then(processResponse);
        };

        var getAll = function() {
            return $http.get(baseUrl)
                        .then(processResponse);
        };

        return {
            getMovieById: getById,
            getAllMovies: getAll
        };

    }

    module.factory("movieData", movieData);

}());
