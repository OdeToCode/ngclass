(function(module) {

    var ShellController = function($rootScope, alerting, requestCounter) {

        var model = this;

        model.currentAlerts = alerting.currentAlerts;
        model.counter = 0;
        model.navbar = "/apps/AtTheMovies/templates/navbardark.html";
        model.getRequestCount = function() {
            return requestCounter.getRequestCount();
        };


        alerting.addInfo("Starting up!");
    };

    module.controller("ShellController", ShellController);

}(angular.module("moviesApp")))