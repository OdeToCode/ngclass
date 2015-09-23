(function(module) {
    'use strict';

    function puStartsWith($log) {

        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attributes, ngModel) {

                var startsWith = attributes.puStartsWith;

                ngModel.$validators.puStartsWith = function(value) {
                    if(value && value.length > 0) {
                        if(value[0] != startsWith) {
                            $log.info("invalid");
                            return false;
                        }
                    }
                    $log.info("valud");
                    return true;
                };


            }
        }
    }

    module.directive("puStartsWith", puStartsWith);

}(angular.module("movies-app")));
