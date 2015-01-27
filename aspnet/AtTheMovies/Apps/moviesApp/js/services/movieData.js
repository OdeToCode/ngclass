
(function () {

    var movieData = function ($http, $q) {

        var save = function (movie) {
            return $http.put("/api/movies", movie);
        };

        var getById = function (id) {

            return $http.get("/api/movies/" + id)
                        .then(function (response) {
                            return response.data;
                        });
        };


        var getAll = function () {
            return $http.get("/api/movies")
                .then(function (response) {

                    return response.data;
                });

        };

        return {
            getAll: getAll,
            getById: getById,
            save: save
        };
    };

    var app = angular.module("moviesApp");
    app.factory("movieData", movieData);

}());