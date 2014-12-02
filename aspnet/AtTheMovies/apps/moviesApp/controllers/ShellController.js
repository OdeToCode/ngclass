angular.module("moviesApp").controller("ShellController", function (alerts, requestCountInterceptor) {

    var model = this;

    model.alerts = alerts.getAlerts();

    model.showAlert = true;
    model.reason = "Unknown";
    model.closeAlert = function (index) {
        alerts.removeAlert(model.alerts[index]);
    };

    model.isOutstandingRequest = function () {
        return requestCountInterceptor.getRequestCount();
    };

    model.createError = function () {
        throw new Error("Something went wrong!");
    };

});