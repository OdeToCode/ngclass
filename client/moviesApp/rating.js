(function() {

    var app = angular.module("moviesApp");

    app.directive("rating", function() {
        return {
            restrict: "AE",
            template: "<div></div>",
            scope: {
                value: "=",
                click: "&"
            },
            link: function(scope, element) {

                element.on("click", function() {
                    scope.$apply(function() {
                        scope.click();
                    });
                 });

                scope.$watch("value", function () {
                    element.empty();
                    for (var i = 1; i <= 5; i++) {
                        var star = angular.element("<span class='glyphicon'></span>");                      
                        if (i <= scope.value) {
                            star.addClass("glyphicon-star filledIn");
                        } else {
                            star.addClass("glyphicon-star-empty");
                        }
                        element.append(star);
                    }
                });
            }
        };
    });

}());