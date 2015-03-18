(function(module) {

    var unique = function($timeout, $q) {
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attributes, ngModel) {

                ngModel.$asyncValidators.unique = function(value) {


                    //return $http.get("/api/validateusername", value)
                    //            .then(function(response) {
                    //                if (response.data.isValid) {
                    //                    return $q.when();
                    //                } else {
                    //                    return $q.reject();
                    //                }
                    //    });




                    var deferred = $q.defer();

                    $timeout(function() {

                        if (value.length > 3) {
                            deferred.resolve();
                        } else {
                            deferred.reject();
                        }

                    }, 2000);

                    return deferred.promise;

                };

            }
        };
    };
    module.directive("unique", unique);


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