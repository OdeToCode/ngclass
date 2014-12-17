(function(module) {

    var alert = function() {
        return {
            restrict: "EA",
            templateUrl: "/apps/moviesApp/templates/alert.html",
            transclude: true,
            link: function(scope, element, attributes) {
                var type = attributes.type || "info";
                var child = element.children();
                child.addClass("alert alert-" + type);

                var closeElement = child.children("span");
                closeElement.on("click", function() {
                    element.remove();
                });
            }
        };
    };

    module.directive("alert", alert); 

}(angular.module("moviesApp")));