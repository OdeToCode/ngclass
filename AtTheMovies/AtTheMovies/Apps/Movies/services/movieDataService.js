(function() {

    var module = angular.module("atTheMovies");

    var movieService = function ($http, $q) {

        var movies = [];

        var getAllMovies = function () {

            if (movies.length == 0) {

                return $http.get("/api/movies")
                        .then(function (response) {
                            movies = response.data;
                            return response.data;
                        });

            } else {

                return $q.when(movies);

            }

            
        };

        var insert = function (movie) {
            return $http.post("/api/movies", movie)
                .then(function (response) {
                    return response.data;
                });

        };

        return {
            getAll: getAllMovies,
            insert: insert
        }
    };




    //var movieService = function($http) {

    //    var getAllMovies = function() {

    //        return $http.get("/api/movies")
    //                    .then(function(response) {
    //                        return response.data;
    //                    });
    //    };

    //    var insert = function(movie) {
    //        return $http.post("/api/movies", movie)
    //            .then(function(response) {
    //                return response.data;
    //            });

    //    };

    //    return {
    //        getAll: getAllMovies,
    //        insert: insert
    //    }
    //};
   

    module.factory("movieDataService", movieService);


}());