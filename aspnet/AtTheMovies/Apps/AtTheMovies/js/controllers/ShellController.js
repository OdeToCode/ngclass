(function(module) {

    var ShellController = function($rootScope, alerting) {

        var model = this;

        model.currentAlerts = alerting.currentAlerts;
        model.counter = 0;
        model.navbar = "/apps/AtTheMovies/templates/navbardark.html";



        alerting.addInfo("Starting up!");
        $rootScope.$on("$routeChangeError", function (event, route1, route2, error) {
            alerting.addError(error.message);
        });

    };

    module.controller("ShellController", ShellController);

}(angular.module("moviesApp")))