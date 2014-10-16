(function(module) {

    var autofocus = function() {
        return {
            restrict: "A",
            link: function(scope, element) {
                var firstInput = element.find("input")[0];
                firstInput.focus();
            }
        };
    };

    module.directive("autofocus", autofocus);

}(angular.module("common")));