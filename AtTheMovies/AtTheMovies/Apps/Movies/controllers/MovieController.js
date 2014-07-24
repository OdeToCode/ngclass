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
    
    var MovieController = function (movieDataService, $log, $location, $anchorScroll) {

        var onMoviesComplete = function(data) {
            vm.movies = data;

        };

        var onMoviesError = function(reason) {
            vm.error = reason;
            vm.isCreatingMovie = false;
        };


        var vm = this;

        movieDataService
            .getAll()
            .then(onMoviesComplete)
            .catch(onMoviesError);

        vm.newAlert = { type: "info", message: "", reason: "" };
        vm.createNewAlert = function() {
            vm.alerts.push(vm.newAlert);
            vm.newAlert = { type: "info", message: "", reason: "" };
        };

        vm.alerts = [
            { type: "warning", message: "Cannot reach the server", reason: "none" },
            { type: "info", message:"Record saved", reason:""}
        ];

        vm.closeAlert = function(index) {
            vm.alerts.splice(index, 1);
        };

        vm.increment = function (movie) {
            movie.length += 1;
        };
        vm.decrement = function (movie) {
            movie.length -= 1;
        };
        vm.saveMovie = function() {

            if (this.movieForm.$valid) {
                movieDataService
                    .insert(vm.newMovie)
                    .then(function(movie) {
                        vm.movies.push(movie);
                        vm.isCreatingMovie = false;
                    })
                    .catch(onMoviesError);
            }
        };

        vm.cancel = function() {
            vm.isCreatingMovie = false;
        };

        vm.add = function () {

            vm.isCreatingMovie = true;
            $location.hash("movieFormDiv");
            vm.newMovie = {
                
            };
        }
    };

    module.controller("MovieController", MovieController);

}());

