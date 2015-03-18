(function(module) {

    var ShellController = function($rootScope, alerting) {

        var model = this;

        model.newAlert = {};
        model.userReason = "Failure!";
        model.currentAlerts = alerting.currentAlerts;
        model.counter = 0;
        model.navbar = "/apps/AtTheMovies/templates/navbardark.html";

        model.closeAlert = function(alert) {
            alerting.removeAlert(alert);
        };

        model.createAlert = function () {
            alerting.addAlert(model.newAlert.type, model.newAlert.message);
            model.newAlert = {};
        };


        alerting.addInfo("Starting up!");
    };

    module.controller("ShellController", ShellController);

}(angular.module("moviesApp")))