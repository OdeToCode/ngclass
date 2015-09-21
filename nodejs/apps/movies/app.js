
var module = angular.module("movies-app", ["ng"]);

module.controller("MainController", function($scope) {

    $scope.message = "Hello, World!";

    $scope.changeMessage = function() {
        $scope.message = "Changed!";
    };

});
