(function(module) {

    var alert = function() {
        // directive definition object (DDO)
        return {
            restrict: "EA",
            templateUrl: "/apps/moviesApp/templates/alert.html",
            transclude: true,
            scope: {
                type: "@",
                reason: "=",
                close: "&"
                
            },
            link: function(scope, element, attributes) {
                //var type = attributes.type || "warning";
                //element.children().addClass("alert alert-" + type);

                // var closeSpan = element[0].querySelector(".close");

                //angular.element(closeSpan).on("click", function() {
                //    element.remove();
                //});
            }
        };

    };

    // restrict
    // E - element - <alert>
    // A - attribute <div alert>
    // C - <div class="alert">
    // M - <!-- alert -->

    module.directive("mAlert", alert);

}(angular.module("moviesApp")));