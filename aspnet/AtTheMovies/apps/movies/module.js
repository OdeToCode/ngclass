(function () {
    var module = angular.module("atTheMovies", ["ngRoute", "ngAnimate", "ui.bootstrap"]);

    module.config(function($provide) {
        $provide.decorator("$exceptionHandler", function ($delegate, $injector) {
            return function(exception) {
                $delegate(exception);
                $injector.get("alerting").addError(exception.message);
            }
        });
    });

    module.controller("ShellController", function (alerting) {
        var model = this;

        model.alerts = alerting.currentAlerts;

        model.createError = function() {
            throw new Error("oops! Something is wrong.");
        };

        model.closeAlert = function(alert) {
            alerting.closeAlert(alert);
        };
    });



    module.config(function ($routeProvider) {

        $routeProvider
            .when("/list", {
                templateUrl: "/apps/movies/list/list.html",
                controller: "ListController as list"
            })
            .when("/detail/:id", {
                templateUrl: "/apps/movies/detail/detail.html",
                controller: "DetailController as detail"
            })
            .when("/edit/:id", {
                templateUrl: "/apps/movies/edit/edit.html",
                controller: "EditController as edit"
            })
            .otherwise({
                redirectTo: "/list"
            });

    });

}());