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
                    value: "=",
                },
                templateUrl:"apps/moviesapp/templates/rating.html",
                link: function (scope, element) {

                    scope.previewIndex = -1;
                    scope.stars = [1, 1, 1, 1, 1];
                    scope.applyClasses = function(index) {
                        return {
                            "glyphicon": true,
                            "preview": index <= scope.previewIndex,
                            "glyphicon-star": index < scope.value,
                            "glyphicon-star-empty": index >= scope.value
                        };
                    };
                    scope.setRating = function(index) {
                        scope.value = index + 1;
                    };

                    scope.preview = function(index) {
                        console.log("preview", index);
                        scope.previewIndex = index;
                        console.log(scope.previewIndex);
                    };

                    scope.unpreview = function() {
                        scope.previewIndex = -1;
                        console.log("unpreview");
                    };
                }
            }
        };

        module.directive("mRating", mRating);

    }(angular.module("moviesApp")));