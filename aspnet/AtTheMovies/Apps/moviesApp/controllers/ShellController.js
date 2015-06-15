(function (module) {

    var ShellController = function (alerting, $timeout, $scope) {
        var model = this;

        model.theme = "/apps/moviesapp/templates/navbardark.html";
        model.currentAlerts = alerting.currentAlerts;
    };

    module.controller("ShellController", ["alerting", "$timeout", "$scope", ShellController]);

}(angular.module("moviesApp")));
