(function (module) {

    var ShellController = function (alerting, $timeout, $scope) {
        var model = this;

        model.counter = 0;

        var increment = function () {
            model.counter += 1;
            $timeout(increment, 1000);
        };
        $timeout(increment, 1000);


        model.currentAlerts = alerting.currentAlerts;

    };

    module.controller("ShellController", ["alerting", "$timeout", "$scope", ShellController]);

}(angular.module("moviesApp")));
