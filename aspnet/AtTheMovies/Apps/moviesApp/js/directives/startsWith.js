(function(module) {

    var startsWith = function() {
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attributes, ngModel) {
                var startsWithValue = attributes.startsWith;
                ngModel.$validators.startsWith = function(value) {
                    if (value && value[0] === startsWithValue) {
                        return true;
                    }
                    return false;
                };

            }
        }
    };

    module.directive("startsWith", startsWith);


}(angular.module("moviesApp")))