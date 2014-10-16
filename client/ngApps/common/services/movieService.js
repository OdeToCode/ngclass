(function (module) {

    // run -> movieService
    // config -> movieServiceProvider

    module.config(function ($provide) {
        $provide.provider("movieService", function () {

            var rootUrl = "";
            this.setRootUrl = function (url) {
                rootUrl = url;
            };

            this.$get = function ($http) {

                var unwrapResponse = function (response) {
                    return response.data;
                };

                var getAllMovies = function () {

                    return $http.get(rootUrl)
                                .then(unwrapResponse);

                };

                var getMovieById = function (id) {
                    return $http.get(rootUrl + id)
                                .then(unwrapResponse);
                };


                var saveMovie = function (movie) {
                    return $http.put(rootUrl, movie)
                                .then(unwrapResponse);

                };

                return {
                    getAllMovies: getAllMovies,
                    getMovieById: getMovieById,
                    saveMovie: saveMovie
                };
            };

        });
    });

}(angular.module("common")));
