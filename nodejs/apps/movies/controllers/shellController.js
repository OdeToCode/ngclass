(function(module) {

    function ShellController($timeout, $scope, $log, alerting, requestCounter) {

        var shell = this;

        shell.counter = 0;
        shell.alerts = alerting.alerts;
        shell.getRequestCount = getRequestCount;

        alerting.addInfo("Application started");

        function getRequestCount() {
            return requestCounter.getRequestCount();
        }

    }

    module.controller("ShellController", ShellController);


}(angular.module("movies-app")));
