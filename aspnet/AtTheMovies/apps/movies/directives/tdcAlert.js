(function(module) {

    function tdcAlert() {
        
        return {
            restrict: "AE",           
            transclude: true,
            scope: {
                type: "=",               
                close: "&"
            },
            templateUrl: "/apps/movies/directives/tdcAlert.html"
            //link: function(scope, element, attributes) {
            //    var type = attributes.type || "danger";
            //    var div = element.children();
            //    div.addClass("alert-" + type);

            //    var close = angular.element(div.children()[0]);
            //    close.on("click", function () {
            //        scope.value += 1;
            //        element.remove();
            //    });

            //}
        }
    }
    module.directive("tdcAlert", tdcAlert);

}(angular.module("atTheMovies")));