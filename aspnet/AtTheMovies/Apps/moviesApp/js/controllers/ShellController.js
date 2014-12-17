(function(module) {

    var shellController = function (alerting) {
        var model = this;
        model.currentAlerts = alerting.currentAlerts;
        model.removeAlert = function (alert) {
            alerting.removeAlert(alert);
        };
    };

    module.controller("shellController", shellController);

}(angular.module("moviesApp")));