(function (module) {

    var startWith = function($log) {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element,
                            attributes, ngModel) {
                var letter = attributes.startWith;
                $log.info("Validating letter " + letter);
                ngModel.$validators.startWith = function(value) {
                    $log.info("Invoking startWith");
                    return value[0] == letter;
                };
            }
        };
    };

    module.directive("startWith", startWith);

}(angular.module("moviesApp")));