(function(module) {

    var ShellController = function($rootScope, $log, $timeout) {

        var model = this;
        model.errors = [];
        model.counter = 0;

        var incrementCounter = function() {

            //$rootScope.$apply(function() {
                model.counter += 1;
                $timeout(incrementCounter, 1000);

            //});

        };

        $timeout(incrementCounter, 1000);

        $rootScope.$on("$routeChangeError", function (event, route1, route2, error) {
            $log.info(arguments);
            model.errors.push(error);
        });

    };

    module.controller("ShellController", ShellController);

}(angular.module("moviesApp")))