(function(module) {
    'use strict';

    function puAlert($log) {
        return {
            restrict: "EA",
            scope: {
                type: "@",
                //reason: "=",
                close: "&"
            },
            templateUrl: "/movies/directives/puAlert.html",
            transclude: true
        };
    }

    module.directive("puAlert", puAlert);


}(angular.module("movies-app")));
