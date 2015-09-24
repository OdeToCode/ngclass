(function(module) {
    'use strict';

    function puRating() {
        return {
            restrict: "EA",
            templateUrl: "/movies/directives/puRating.html",
            scope: {
                value: "="
            },
            link: function(scope, element) {

                var innerDiv = element.children();

                function drawElement(value) {
                    innerDiv.html("");
                    for(var i = 0; i < scope.value; i++){
                        innerDiv.append("*");
                    }
                }

                element.on("click", function() {
                    scope.$apply(function() {
                        scope.value += 1;
                    });
                });

                scope.$watch("value", function(newValue) {
                    drawElement(newValue);
                });

            }
        };
    }

    module.directive("puRating", puRating);

}(angular.module("movies-app")));
