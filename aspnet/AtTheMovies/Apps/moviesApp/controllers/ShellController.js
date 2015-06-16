(function (module) {

    var ShellController = function (alerting, requestCounter) {
        var model = this;

        model.hasOutstandingRequest = function() {
            return requestCounter.getRequestCount() > 0;
        };
        model.theme = "/apps/moviesapp/templates/navbardark.html";
        model.currentAlerts = alerting.currentAlerts;
    };

    module.controller("ShellController", ["alerting", "requestCounter", ShellController]);

}(angular.module("moviesApp")));
