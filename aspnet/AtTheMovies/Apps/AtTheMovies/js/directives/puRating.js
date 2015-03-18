(function(module) {

    var rating = function() {

        return {
            restrict: "EA",
            templateUrl: "/apps/AtTheMovies/templates/puRating.html",
            scope: {
                value: "="
            },
            link: function(scope) {
                scope.stars = [1, 2, 3, 4, 5];

                scope.setValue = function(newValue) {
                    scope.value = newValue;
                };

                scope.getStars = function(value) {
                    return {
                        "glyphicon": true,
                        "glyphicon-star": value <= scope.value,
                        "glyphicon-star-empty": value > scope.value
                    };
                };
            }
        }
    };

    module.directive("puRating", rating);

}(angular.module("moviesApp")));