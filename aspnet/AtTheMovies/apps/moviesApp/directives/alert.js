(function() {
    var module = angular.module("moviesApp");

    var alert = function() {
        // directive definition object DDO
        return {
            restrict: "E",
            templateUrl: "/apps/moviesApp/templates/alert.html",
            transclude: true,
            scope: {
                type: "@",
                message: "&"
            },
            link: function(scope, element, attributes) {
                //var div = element.children("div");

                var type = attributes.type || "info";
                //div.addClass("alert alert-" + type);

                //var input = element.children("input");
                //input.on("click", function() {
                //    element.remove();
                //});
            }
        };
    };

    module.directive("alert", alert);


}());