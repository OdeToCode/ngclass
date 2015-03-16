(function(module) {

    var ShellController = function(errors, requestCounter) {
        var self = this;

        self.currentErrors = errors.getCurrentErrors();
        self.getRequestCount = function() {
            return requestCounter.getCurrentRequestCount();
        };
    };

    module.controller("ShellController", ShellController);

}(angular.module("moviesApp")))