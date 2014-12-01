(function() {

    var module = angular.module("moviesApp");

    function movieData($http) {

        var updateMovie = function(movie) {
            return $http.put("/api/movies", movie);
        };

        var getMovies = function () {

            return $http.get("/api/movies")
                        .then(function(response) {
                            return response.data;
                        });
        };

        return {
            getMovies: getMovies,
            updateMovie: updateMovie
        };
    };

    movieData.$inject = ["$http"];

    module.factory("movieData", movieData);

}());