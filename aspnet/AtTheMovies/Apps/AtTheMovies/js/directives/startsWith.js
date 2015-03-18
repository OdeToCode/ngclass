(function(module) {


    var startsWith = function($log) {

        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attributes, ngModel) {

                var startingLetter = attributes.startsWith;

                ngModel.$validators.startsWith = function(value) {
                    var result = value ? value[0] === startingLetter : false;
                    $log.info(result);
                    return result;
                };

            }
        };

    };


    module.directive("startsWith", startsWith);

}(angular.module("moviesApp")))