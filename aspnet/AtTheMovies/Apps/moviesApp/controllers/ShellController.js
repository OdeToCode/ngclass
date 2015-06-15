(function (module) {

    var ShellController = function (alerting) {
        var model = this;

        model.currentAlerts = alerting.currentAlerts;

    };

    module.controller("ShellController", ["alerting", ShellController]);

}(angular.module("moviesApp")));
