(function(module) {

    var updateStars = function(element) {
        return function (newValue) {
            element.empty();
            for (var i = 0; i < 5; i++) {
                if (i < newValue) {
                    element.append("<span data-index='"  + i  + "' class='glyphicon glyphicon-star'>");
                } else {
                    element.append("<span data-index='" + i + "' class='glyphicon glyphicon-star-empty'>");
                }
            }
        };
    };

    var mRating = function() {
            return {
                restrict: "EA",
                scope: {
                    value:"=",
                },
                templateUrl:"apps/moviesapp/templates/rating.html",
                link: function (scope, element) {

                    //element.on("click", function(event) {
                    //    scope.$apply(function() {
                    //        var value = parseInt(angular.element(event.srcElement).attr("data-index"));
                    //        console.log(value);
                    //        scope.value = value + 1;
                    //    });
                    //});
                    //scope.$watch("value", updateStars(element));
                }
            }
        };

        module.directive("mRating", mRating);

    }(angular.module("moviesApp")));