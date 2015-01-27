(function(module) {

    var errors = function($injector) {

        var currentErrors = [];

        var removeError = function(message) {
            return function() {
                for (var i = 0; i < currentErrors.length; i++) {
                    if (currentErrors[i] === message) {
                        currentErrors.splice(i, 1);
                        break;
                    }
                }
            };
        };

        var addError = function(message) {
            currentErrors.push(message);
            var timeout = $injector.get("$timeout");
            timeout(removeError(message), 1000);
        };

        var getCurrentErrors = function() {
            return currentErrors;
        };

        return {
            addError: addError,
            getCurrentErrors: getCurrentErrors
        };
    };

    module.factory("errors", errors);

}(angular.module("moviesApp")));