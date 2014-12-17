(function(module) {

    var alert = function() {
        return {
            restrict: "EA",
            templateUrl: "/apps/moviesApp/templates/alert.html",
            transclude: true,
            scope: {
                type: "@",
                close: "&"
            },
            link: function(scope, element, attributes) {
                //var type = attributes.type || "info";
                //var child = element.children();
                //child.addClass("alert alert-" + type);

                //scope.close = function() {
                //    element.remove();
                //};

                //var closeElement = child.children("span");
                //closeElement.on("click", function() {
                //    scope.close();
                //});
            }
        };
    };

    module.directive("alert", alert); 

}(angular.module("moviesApp")));