(function(module) {
    'use strict';


    module.config(function($provide){
        $provide.decorator("$exceptionHandler",
                    function($delegate, $injector){
            return function(ex) {

                var alerting = $injector.get("alerting");
                alerting.addError(ex.message);
                $delegate(ex);
            }
        });
    });



}(angular.module("movies-app")));
