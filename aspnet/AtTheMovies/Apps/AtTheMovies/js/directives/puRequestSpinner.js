(function(module) {

    var requestSpinner = function(requestCounter) {
        return {
            restrict: "EA",
            templateUrl: "/apps/AtTheMovies/templates/puRequestSpinner.html",
            link: function (scope, element) {

                element.on("click", function() {
                    scope.$apply(function() {
                        // model.value = model.value += 1;
                    });
                });


                scope.$watch(function() {
                    return requestCounter.getRequestCount();
                }, function(value) {
                    if (value > 0) {
                        element.removeClass("ng-hide");
                    } else {
                        element.addClass("ng-hide");
                    }
                });

            }
        }
    };

    module.directive("puRequestSpinner", requestSpinner);

}(angular.module("moviesApp")));