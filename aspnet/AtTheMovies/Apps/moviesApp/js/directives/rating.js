(function(module) {

    var rating = function() {
        return {
            restrict: "EA",
            templateUrl: "/apps/moviesApp/templates/rating.html",
            scope: {
                value: "=",
                increase: "&"
            },
            link: function (scope, element, attributes) {

                scope.$watch("value", function() {
                    scope.stars = [];
                    for (var i = 0; i < scope.value; i++) {
                        scope.stars.push(i);
                    }
                });
                
                

                //scope.$watch("value", function (newValue) {
                //    element.empty();
                //    for (var i = 0; i < scope.value; i++) {
                //        element.append("*");
                //    }
                //});
                //element.on("click", function() {
                //    scope.$apply(function() {
                //        scope.increase();
                //    });
                //});
            }
        };
    };

    module.directive("rating", rating);

}(angular.module("moviesApp")));