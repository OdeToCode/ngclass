(function() {

    var module = angular.module("atTheMovies");

    var movieService = function(h) {

        var getAllMovies = function() {

            return h.get("/api/movies")
                        .then(function(response) {
                            return response.data;
                        });
        };

        return {
            getAll: getAllMovies
        }
    };
    movieService.$inject = ["$http"];

    module.factory("movieDataService", movieService);


}());