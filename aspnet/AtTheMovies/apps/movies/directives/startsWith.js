(function(module) {

    function startsWith($log) {
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attributes, ngModel) {

                var startCharacter = attributes.startsWith;

                ngModel.$validators.startsWith = function(value) {
                    $log.info(value);

                    if (value) {
                        if (value[0] === startCharacter) {
                            return true;
                        }
                        return false;
                    }
                    return true;
                }

            }
        }
    }


    module.directive("startsWith", startsWith);

}(angular.module("atTheMovies")))