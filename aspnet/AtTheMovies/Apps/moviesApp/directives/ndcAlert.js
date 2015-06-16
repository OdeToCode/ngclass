(function(module) {

    var ndcAlert = function() {

        // <ndc-alert>
        //     Some error message
        // </ndc-alert>
        // <div ndc-alert>

        return {
            restrict: "EA",
            templateUrl: "/apps/moviesApp/templates/ndcAlert.html",
            scope: {
                type: "@",
                reason: "=",
                close: "&"
            },
            transclude: true
            //link: function(scope, element, attributes) {

            //    var type = attributes.type || "info";
            //    var child = element.children();
            //    child.addClass("alert alert-" + type);

                
            //    var button = angular.element(element[0].querySelector("button"));
            //    button.on("click", function () {
            //        element.remove();
            //    });
            //}
        }

    };

    module.directive("ndcAlert", ndcAlert);

}(angular.module("moviesApp")));