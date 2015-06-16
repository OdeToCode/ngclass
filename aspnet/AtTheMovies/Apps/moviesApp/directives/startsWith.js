(function(module) {

    var startsWith = function($log) {
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attributes, ngModel) {

                var startingCharacter = attributes.startsWith;

                ngModel.$validators.startsWith = function(modelValue) {

                    $log.info("startsWith Validation of " + modelValue);
                    if (modelValue && modelValue.length > 0) {
                        if (modelValue[0] === startingCharacter) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                    return true;
                };


            }
    }

    };

    module.directive("startsWith", startsWith);

}(angular.module("moviesApp")));