angular.module("moviesApp").controller("ShellController", function (alerts, requestCountInterceptor) {

    var model = this;

    model.alerts = alerts.getAlerts();

    model.isOutstandingRequest = function() {
        return requestCountInterceptor.getRequestCount();
    };

    model.createError = function() {
        throw new Error("Something went wrong!");
    };

});