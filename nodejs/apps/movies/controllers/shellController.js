(function(module) {

    function ShellController($timeout, $scope, $log, alerting, requestCounter) {

        var shell = this;

        shell.counter = 0;
        shell.alerts = alerting.alerts;
        shell.getRequestCount = getRequestCount;
        shell.closeAlert = closeAlert;

        alerting.addInfo("Application started");

        function closeAlert(alert) {
            alerting.removeAlert(alert);
        }

        function getRequestCount() {
            return requestCounter.getRequestCount();
        }

    }

    module.controller("ShellController", ShellController);


}(angular.module("movies-app")));
