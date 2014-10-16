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

        model.closeAlert = function(alert) {
            alerts.removeAlert(alert);
        };
    };


    module.controller("ShellController", ShellController);

}(angular.module("moviesApp")));