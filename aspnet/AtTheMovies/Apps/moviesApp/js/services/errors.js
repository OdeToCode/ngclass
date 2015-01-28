(function (module) {

    var errors = function () {

        var currentErrors = [];

        var removeError = function (error) {
            for (var i = 0; i < currentErrors.length; i++) {
                if (currentErrors[i] === error) {
                    currentErrors.splice(i, 1);
                    break;
                }
            }
        };

        var addError = function (message) {
            var error = { type: "danger", message: message, reason: "" };
            currentErrors.push(error);
            //var timeout = $injector.get("$timeout");
            //timeout(removeError(error), 10000);
        };

        var getCurrentErrors = function () {
            return currentErrors;
        };

        var handle = function (message) {
            return function (reason) {
                addError(message);
            }
        }

        return {
            addError: addError,
            removeError: removeError,
            getCurrentErrors: getCurrentErrors,
            handle: handle
        };
    };

    module.factory("errors", errors);

}(angular.module("moviesApp")));