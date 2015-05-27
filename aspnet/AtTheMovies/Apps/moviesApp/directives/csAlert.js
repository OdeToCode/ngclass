(function() {

    var module = angular.module("moviesApp");

    var csAlert = function() {
       
        return {
            restrict: "AE",
            templateUrl: "/apps/moviesApp/directives/csAlert.html",
            transclude: true,
            scope: {
                type: "=",
                reason: "=",
                close: "&"
            }
        };
    };

    module.directive("csAlert", csAlert);

}());