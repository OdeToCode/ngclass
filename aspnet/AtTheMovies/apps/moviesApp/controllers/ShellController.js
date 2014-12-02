angular.module("moviesApp").controller("ShellController", function (alerts, requestCountInterceptor) {

    var model = this;

    model.alerts = alerts.getAlerts();

    model.showAlert = true;
    model.reason = "Unknown";
    model.closeAlert = function() {
        model.showAlert = false;
    };

    model.isOutstandingRequest = function() {
        return requestCountInterceptor.getRequestCount();
    };

    model.createError = function() {
        throw new Error("Something went wrong!");
    };

});