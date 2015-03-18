(function(module) {

    var rating = function() {
        return {
            restrict: "EA",
            
            scope: {
                value: "="
            },
            link: function(scope, element, attributes) {

                var updateValue = function (value) {
                    return function () {
                        scope.value = value + 1;
                        scope.$apply();
                    };
                };

                var updateDom = function() {
                    element.empty();
                    var classes;
                    for (var i = 0; i < 5; i++) {
                        classes = "glyphicon ";
                        if (i < scope.value) {
                            classes += "glyphicon-star";
                        } else {
                            classes += "glyphicon-star-empty";
                        }

                        var star = angular.element("<span class='" + classes + "'></span>");
                        element.append(star);

                        
                        star.on("click", updateValue(i));
                    }
                };

               

                scope.$watch("value", updateDom);
               
            }
        }
    };

    module.directive("puRating", rating);

}(angular.module("moviesApp")));