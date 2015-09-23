(function(module) {
    'use strict';

    function puAlert($log) {
        return {
            restrict: "EA",
            templateUrl: "/movies/directives/puAlert.html",
            transclude: true,
            link: function(scope, element, attributes) {
                $log.info("Linking puAlert");

                var type = attributes.type || "info";
                var div = element.children();
                div.addClass("alert alert-" + type);

                var button = angular.element(element[0].querySelector("button"));
                button.on("click", function() {
                    element.remove();
                });

            }
        };
    }

    module.directive("puAlert", puAlert);


}(angular.module("movies-app")));
