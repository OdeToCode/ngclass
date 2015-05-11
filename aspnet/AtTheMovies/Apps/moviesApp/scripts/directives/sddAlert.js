
(function (module) {

    var sddAlert = function($log) {

        return {
            restrict: "EA",
            templateUrl: "/apps/moviesApp/templates/sddAlert.html",
            transclude: true,
            scope: {
                type: "=",
                reason: "=",
                dismiss: "&"
            }
        };

    };
    
 
    module.directive("sddAlert", sddAlert);

}(angular.module("moviesApp")));
