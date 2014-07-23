//var MovieController = function($scope) {

//    var movies = [
//        { title: "Star Wars", length: 120, released: "10/1/1977" },
//        { title: "Toy Story", length: 90, released: "10/1/1993" },
//        { title: "Lego Movie", length: 110, released: "2/1/2014" }
//    ];

//    $scope.movies = movies;
//};


(function() {


    var module = angular.module("atTheMovies");
    
    var MovieController = function (movieDataService, $log) {

        var onMoviesComplete = function(data) {
            vm.movies = data;
        };

        var onMoviesError = function(reason) {
            vm.error = reason;
        };


        var vm = this;

        movieDataService
            .getAll()
            .then(onMoviesComplete)
            .catch(onMoviesError);

        $log.info("I have movies!!");

        vm.increment = function (index) {
            vm.movies[index].length += 1;
        };
        vm.decrement = function (movie) {
            movie.length -= 1;
        };
    };

    module.controller("MovieController", MovieController);

}());

