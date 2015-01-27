
(function () {

    var baseUrl = "";
    var module = angular.module("common");

    var movieData = function ($http, $q) {

        var save = function (movie) {
            return $http.put(baseUrl, movie);
        };

        var getById = function (id) {

            return $http.get(baseUrl + id)
                        .then(function (response) {
                            return response.data;
                        });
        };


        var getAll = function () {
            return $http.get(baseUrl)
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

    module.config(function ($provide) {

        $provide.provider("movieData", function () {

            this.setBaseUrl = function (newUrl) {
                baseUrl = newUrl;
            };
            this.$get = movieData;
        });

    });

}());