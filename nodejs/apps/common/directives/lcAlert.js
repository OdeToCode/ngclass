(function(module) {
   
    var lcAlert = function() {
        return {
            restrict: "EA",

            transclude: true,

            templateUrl: "/common/directives/lcalert.html",
            scope: {
                //type: "@type" // <lc-alert type="something"
                type: "=type",
                reason: "=",     // <lc-alert reason="...expression..."
                close: "&"       // lc-alert close="model.close()"
            }

            //link: function (scope, element, attributes) {
            //    var type = attributes.type || "danger";
            //    var div = angular.element(element.find("div")[0]);
            //    div.addClass("alert alert-" + type);

            //    scope.close = function() {
            //        element.remove();
            //    };
            //    var button = element.find("button");
            //    button.on("click", function() {
            //        scope.close();
            //    });
            //}
        };
    };

    module.directive("lcAlert", lcAlert);

}(angular.module("common")));