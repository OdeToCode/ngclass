(function() {

    var module = angular.module("movies-app");

    function processResponse(response){
        return response.data;
     }

    function movieData($http) {

        var baseUrl = "/api/movies/";

        function saveMovie(movie) {

            if(movie.id){
                return $http.put(baseUrl, movie)
                            .then(processResponse);
            }
            else {
                return $http.post(baseUrl, movie)
                            .then(processResponse);
            }
        }

        function getById(id) {
            var url = baseUrl + id;
            return $http.get(url)
                        .then(processResponse);
        };

        function getAll() {
            return $http.get(baseUrl)
                        .then(processResponse);
        };

        return {
            getMovieById: getById,
            getAllMovies: getAll,
            saveMovie: saveMovie
        };

    }

    module.factory("movieData", movieData);

}());
