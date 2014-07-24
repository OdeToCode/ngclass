(function() {

    var app = angular.module("atTheMovies");

    app.directive("dsAlert", function() {
        // directive definition
        return {
            restrict: "EA",
            templateUrl: "directives/alert.html",
            replace: true,
            scope: {
                type: "@",
                reason: "="
            },
            transclude: true,
            link: function(scope, element, attributes) {
           
                //var type = attributes.type || "info";
              
                //element.addClass("alert alert-" + type);
                //element.children("button").on("click", function() {
                //    element.remove();
                //});
            }
        };
    });

}());