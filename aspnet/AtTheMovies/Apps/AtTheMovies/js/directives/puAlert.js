(function(module) {

    var puAlert = function($log) {

        return {
            restrict: "EA",
            templateUrl: "/apps/AtTheMovies/templates/puAlert.html",
            transclude: true,
            scope: {
                type: "=",
                reason: "=",
                close: "&"
            }
        };
    };


    module.directive("puAlert", puAlert);

}(angular.module("moviesApp")));