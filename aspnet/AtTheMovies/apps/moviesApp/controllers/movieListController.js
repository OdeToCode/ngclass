(function() {

    var module = angular.module("moviesApp");

   
    module.controller("MoviesListController", function ($scope, $timeout, movieData, $log) {

        var model = this;

        $log.info("creating movie list controller");

        var onMovies = function(movies) {
            model.movies = movies;
            angular.forEach(movies, function(movie) {
                if (movie.rating > 4) {
                    movie.good = true;
                }else if (movie.rating < 3) {
                    movie.bad = true;
                }
            });
        };

        var onError = function(response) {
            model.error = response.data.message;
        };

        var initialize = function(){
            movieData.getMovies().then(onMovies, onError);
        };

        model.editMovie = function (movie) {
            movie.editing = true;
        };

        model.saveEdit = function (movie) {
            delete movie.editing;
            movieData.updateMovie(movie).catch(onError);
        };

        model.increaseRating = function (movie) {
            movie.rating += 1;
            movieData.updateMovie(movie).catch(onError);
        };

        model.decreaseRating = function (movie) {
            movie.rating -= 1;
            movieData.updateMovie(movie).catch(onError);
        };

        initialize();
    });


    //module.controller("MoviesListController", function($scope) {

    //    var movie = {
    //        title: "Star Wars",
    //        year: 1979
    //    }

    //    $scope.changeMessage = function() {
    //        $scope.greeting = "Bonjour!";
    //    };

    //    $scope.greeting = "Hello, World!";
    //    $scope.movie = movie;


    //});

}());