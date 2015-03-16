(function(module) {

    var ShellController = function(errors) {
        var self = this;

        self.currentErrors = errors.getCurrentErrors();
    };

    module.controller("ShellController", ShellController);

}(angular.module("moviesApp")))