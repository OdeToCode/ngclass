(function(module) {

    var ShellController = function(alerts, httpRequestCount) {
        var model = this;
        model.alerts = alerts.currentAlerts;

        model.makeError = function() {
            throw "Opps!";
        };

        model.getRequestCount = function() {
            return httpRequestCount.getRequestCount();
        };
    };


    module.controller("ShellController", ShellController);

}(angular.module("moviesApp")));