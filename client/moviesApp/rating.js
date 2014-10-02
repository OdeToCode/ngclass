(function() {

    var app = angular.module("moviesApp");

    app.directive("rating", function() {
        return {
            restrict: "AE",
            templateUrl: "moviesApp/rating.html",
            scope: {
                value: "="
            },
            link: function(scope, element) {

                scope.stars = [1, 2, 3, 4, 5];

                var getChildren = function() {

                    return element.children().children();
                };

                scope.clicked = function(number) {
                    scope.value = number;
                };

                scope.preview = function(index) {
                    var children = getChildren();
                    for (var i = 0; i < index; i++) {
                        angular.element(children[i]).addClass("starHover");
                    }
                };

                scope.unpreview = function() {
                    var children = getChildren();
                    children.removeClass("starHover");
                };
               
                scope.$watch("value", function () {
                    var children = getChildren();
                    for (var i = 0; i < children.length; i++) {
                        var child = angular.element(children[i]);
                        child.removeClass("glyphicon-star glyphicon-star-empty filledStar");

                        if (i < scope.value) {
                            child.addClass("glyphicon-star filledStar");
                        } else {
                            child.addClass("glyphicon-star-empty");
                        }
                    }
                });
            }
        };
    });

}());