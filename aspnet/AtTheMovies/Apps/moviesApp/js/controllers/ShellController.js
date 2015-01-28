(function(module) {

    var ShellController = function(errors, requestCounter) {
        var self = this;

        self.currentErrors = errors.getCurrentErrors();
        self.getRequestCount = function() {
            return requestCounter.getCurrentRequestCount();
        };

        self.closeError = function(error) {
            errors.removeError(error);
        };
    };

    module.controller("ShellController", ShellController);

}(angular.module("moviesApp")))