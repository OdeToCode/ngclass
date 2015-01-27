(function(module) {

    module.config(function($provide) {

        $provide.decorator("$exceptionHandler", function($delegate, errors) {
            return function (exception, cause) {
                $delegate(exception, cause);
                errors.addError(exception.message);
            };
        });
    });

}(angular.module("moviesApp")));