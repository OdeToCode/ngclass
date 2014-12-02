angular.module("moviesApp").controller("ShellController", function (alerts) {

    var model = this;

    model.alerts = alerts.getAlerts();

    model.createError = function() {
        throw new Error("Something went wrong!");
    };

});