(function(module) {

    function ShellController($timeout, $scope, $log, alerting) {

        var shell = this;

        shell.counter = 0;
        shell.alerts = alerting.alerts;

        alerting.addInfo("Application started");

        function incrementCounter() {
            shell.counter += 1;
            $timeout(incrementCounter, 1000);
        }

        incrementCounter();
    }

    module.controller("ShellController", ShellController);


}(angular.module("movies-app")));
