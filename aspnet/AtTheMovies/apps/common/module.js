(function() {

    var module = angular.module("common", []);


    module.config(function($provide) {
        $provide.decorator("$exceptionHandler", function($delegate, alerts) {
            return function(exception, cause) {
                $delegate(exception, cause);
                alerts.addException(exception);
            };
        });
    });
}());