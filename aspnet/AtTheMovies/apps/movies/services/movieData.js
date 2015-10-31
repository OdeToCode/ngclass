(function (module) {

    function movieData($http) {

        var url = "/api/movies/";

        function processResponse(response) {
            return response.data;
        }

        function saveMovie(movie) {
            return $http.put(url, movie)
                        .then(processResponse);
        }

        function getAllMovies() {
            return $http.get(url)
                .then(processResponse);
        }

        function getMovieById(id) {
            return $http.get(url + id)
                        .then(processResponse);
        }

        function deleteMovie(movie) {
            return $http.delete(url + movie.id)
                        .then(processResponse);
        }

        return {
            getAll: getAllMovies,
            getById: getMovieById,
            delete: deleteMovie,
            save: saveMovie
        };
    };

    module.factory("movieData", movieData);


}(angular.module("atTheMovies")));