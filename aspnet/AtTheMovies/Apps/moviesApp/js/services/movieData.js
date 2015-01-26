
(function () {

    var movieData = function ($http) {

        var getAll = function() {

            return $http.get("/api/movies");

        };

        return {
            getAll: getAll
        };
    };

    var app = angular.module("moviesApp");
    app.factory("movieData", movieData);

}());