(function(module) {

    var odd = function ($q, $timeout) {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attributes, ngModel) {
                ngModel.$asyncValidators.odd = function (modelValue, viewValue) {
                    var defer = $q.defer();

                    $timeout(function() {

                        var result = modelValue % 2 == 1;
                        if (result) {
                            defer.resolve();
                        } else {
                            defer.reject();
                        }

                    }, 2000);

                    return defer.promise;
                };
            }
        };
    };


    //var odd = function($log) {
    //    return {
    //        restrict: "A",
    //        require: "ngModel",
    //        link: function(scope, element, attributes, ngModel) {
    //            ngModel.$validators.odd = function(modelValue, viewValue) {
    //                var result = modelValue % 2 == 1;
    //                return result;
    //            }
    //        }
    //    }
    //};

    module.directive("odd", odd);

}(angular.module("common")));