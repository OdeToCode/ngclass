(function(module) {


    module.config(function($provide) {

        $provide.decorator("$exceptionHandler", function($delegate, $injector) {
            return function(exception, cause) {
                $delegate(exception, cause);

                var alerting = $injector.get("alerting");
                alerting.addError(exception.message);
            };
        });
    });

    module.run(function($rootScope, alerting) {
        //$rootScope.$on("$routeChangeError", function (event, route1, route2, error) {
        //    alerting.addError(error.message);
        //});
    });


}(angular.module("moviesApp")));