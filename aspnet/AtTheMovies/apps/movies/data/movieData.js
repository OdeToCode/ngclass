(function (module) {

    function movieData($http) {

        var url = "/api/movies/";

        function processResponse(response) {
            return response.data;
        }

        function getAllMovies() {
            return $http.get(url)
                .then(processResponse);
        }

        function getMovieById(id) {
            return $http.get(url + id)
                        .then(processResponse);
        }

        return {
            getAll: getAllMovies,
            getById: getMovieById
        };
    };

    module.factory("movieData", movieData);


}(angular.module("atTheMovies")));