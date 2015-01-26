
(function () {

    var movieData = function ($http, $q) {

        var movies = [];

        var getById = function (id) {

            return $http.get("/api/movies/" + id)
                        .then(function(response) {
                            return response.data;
                        }); 
        };

        var getAll = function() {

            if (movies.length > 0) {
                return $q.when(movies);
            }

            return $http.get("/api/movies")
                        .then(function (response) {
                                movies = response.data;
                                return movies;
                         });
        };

        return {
            getAll: getAll,
            getById: getById
        };
    };

    var app = angular.module("moviesApp");
    app.factory("movieData", movieData);

}());