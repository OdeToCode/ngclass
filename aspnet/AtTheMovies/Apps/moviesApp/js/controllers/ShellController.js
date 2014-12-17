(function(module) {

    var shellController = function (alerting, requestCounter) {
        var model = this;


        model.getRequestCounter = function() {
            return requestCounter.getCounter();
        };
        model.currentAlerts = alerting.currentAlerts;
        model.removeAlert = function (alert) {
            alerting.removeAlert(alert);
        };

    };

    module.controller("shellController", shellController);

}(angular.module("moviesApp")));