(function() {

    var module = angular.module("moviesApp");

    var startWith = function() {
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attributes, ngModel) {
                var character = attributes.startWith;

                ngModel.$validators.startWith = function(currentValue, oldValue) {
                    if (currentValue[0] === character) {
                        return true;
                    }
                    return false;
                };
            }
        }
    };

    module.directive("startWith", startWith);

}());