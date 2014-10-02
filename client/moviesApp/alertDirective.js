(function() {

    var app = angular.module("moviesApp");

    var alert = function() {
        // return directive definition object

        // <alert> E
        // <div alert>
        // <div class="alert">


        return {
            restrict: "EA",
            templateUrl: "moviesApp/alertTemplate.html",
            transclude: true,
            scope: {
                type: "=",
                count: "@",
                reason: "=",
                close: "&"
            }
            //link: function(scope, element, attributes) {

            // scope.$watch("reason", function(newVal, oldVal) {
                //element.addClass()
            //}
        //

            //    var type = attributes.type || "warning";
            //    var child = element.children("div");
            //    child.addClass("alert");
            //    child.addClass("alert-" + type);

            //    scope.onclose = function() {
            //        
            //        scope.type
            //element.remove();
            //    };

            //    var button = element.find("input");
            //    button.on("click", scope.onclose);
            //}
        };
    };


    app.directive("puAlert", alert);

}());