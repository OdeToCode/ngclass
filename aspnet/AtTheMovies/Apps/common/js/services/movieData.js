(function (common) {

    common.config(function ($provide) {
        $provide.provider("movieData", function () {

            var baseUrl = "/movies";
            this.setBaseUrl = function (url) {
                baseUrl = url;
            };

            this.$get = function ($http, $q, $log) {
                var movies = [];
                $log.info("Creating movies service");

                var createMovie = function (movie) {
                    movies = [];
                    return $http.post(baseUrl, movie)
                                .then(function (response) {
                                    return response.data;
                                });
                };

                var saveMovie = function (movie) {
                    movies = [];
                    return $http.put(baseUrl, movie);
                };

                var getMovieById = function (id) {
                    var url = baseUrl + id;
                    return $http.get(url)
                                .then(function (response) {
                                    return response.data;
                                });
                };

                var getAllMovies = function () {
                    if (movies.length > 0) {
                        $log.info("Got movies from cache");
                        return $q.when(movies);
                    } else {
                        return $http.get(baseUrl)
                            .then(function (response) {
                                $log.info("Got movies from API");
                                movies = response.data;
                                return movies;
                            });
                    }
                };


                return {
                    getAllMovies: getAllMovies,
                    saveMovie: saveMovie,
                    getMovieById: getMovieById,
                    createMovie: createMovie
                };
            };


        });
    });

}(angular.module("common")));
