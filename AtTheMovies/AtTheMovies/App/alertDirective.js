(function() {

    var app = angular.module("app");

    app.directive("dsAlert", function() {

        // DDO

        return {
            // E - element
            // A - attribute
            // C - class     <div class="alert alert-info"
            // M - HTML comment
            restrict: "E",
            templateUrl: "alertTemplate.html",
            transclude: true,
            scope: {
                type: "@",
                reason: "=",
                close: "&"
            },
            link: function($scope, $element, attributes, controller, transcludeFn) {
               
                //var type = attributes.type || "warning";
                //var $child = $element.children("div");
                //$child.addClass("alert-" + type);

                //var $button = $element.children("button");
                //$button.on("click", function() {
                //    $element.close();
                //});
            }
        }
    });

}());