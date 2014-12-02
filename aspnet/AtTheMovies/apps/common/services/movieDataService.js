(function () {

    var module = angular.module("common");

    module.config(function ($provide) {
        $provide.provider("movieData", function () {

            var baseUrl = "";

            this.setBaseUrl = function (newUrl) {
                baseUrl = newUrl;
            };

            this.$get = function ($http, $log, $q) {
                var movies = [];

                $log.info("creating movie movie data");

                var updateMovie = function (movie) {
                    return $http.put(baseUrl, movie);
                };

                var getMovies = function () {

                    if (movies.length) {
                        return $q.when(movies);
                        //var deferred = $q.deferred();
                        //deferred.resolve(movies);                  
                        //return deferred.promise;
                    }

                    return $http.get(baseUrl)
                                .then(function (response) {
                                    movies = response.data;
                                    return movies;
                                });
                };

                var getMovie = function (id) {
                    return $http.get(baseUrl + "/" + id)
                                .then(function (response) {
                                    return response.data;
                                });
                };

                var addMovie = function (movie) {
                    return $http.post(baseUrl, movie)
                        .then(function (response) {
                            return response.data;
                        });
                };

                return {
                    addMovie: addMovie,
                    getMovie: getMovie,
                    getMovies: getMovies,
                    updateMovie: updateMovie
                };
            };

        });
    });

}());