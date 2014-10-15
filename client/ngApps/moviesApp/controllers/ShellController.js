(function(module) {

    var ShellController = function(alerts) {
        var model = this;
        model.alerts = alerts.currentAlerts;

        model.makeError = function() {
            throw "Opps!";
        };
    };


    module.controller("ShellController", ShellController);

}(angular.module("moviesApp")));