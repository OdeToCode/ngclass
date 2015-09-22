(function() {

    var module = angular.module("common");

    module.config(function($provide){
        $provide.provider("movieData", function() {

            var baseUrl = "/api";

            this.setBaseUrl = function(newUrl) {
                baseUrl = newUrl;
            };

            this.$get = function($http, $q) {
                return movieDataFactory($http, $q, baseUrl);
            }

        });
    });


    function movieDataFactory($http, $q, baseUrl) {

        var movies = [];

        function processResponse(response){
            return response.data;
         }

         function cacheMovies(movieData) {
             movies = movieData;
             return movies;
         }

        function saveMovie(movie) {
            movies = [];
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
            if(movies.length) {
                return $q.when(movies);
            }
            else {
                return $http.get(baseUrl)
                            .then(processResponse)
                            .then(cacheMovies);
            }
        };

        return {
            getMovieById: getById,
            getAllMovies: getAll,
            saveMovie: saveMovie
        };
    }


}());
