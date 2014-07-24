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
    
    var MovieController = function (
            movies, $log,$location) {

        var vm = this;

        vm.movies = movies;       

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
      

        vm.add = function () {

            
            $location.path("/editMovie");
           
        }
    };

    module.controller("MovieController", MovieController);

}());

