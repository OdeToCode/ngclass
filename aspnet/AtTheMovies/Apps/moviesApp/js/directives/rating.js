(function(module) {

    var rating = function() {
        return {
            restrict: "EA",
            templateUrl: "/apps/moviesApp/templates/rating.html",
            scope: {
                value: "="
            },
            link: function (scope, element, attributes) {
                scope.$watch("value", function (newValue) {
                    element.empty();
                    for (var i = 0; i < scope.value; i++) {
                        element.append("*");
                    }
                });
                element.on("click", function() {
                    scope.$apply(function() {
                        if (scope.value < 5) {
                            scope.value += 1;
                        } else {
                            scope.value = 1;
                        }
                    });
                });
            }
        };
    };

    module.directive("rating", rating);

}(angular.module("moviesApp")));