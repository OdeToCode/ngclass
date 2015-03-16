(function(module) {

    var ShellController = function($rootScope, $log) {

        var model = this;
        model.errors = [];

        $rootScope.$on("$routeChangeError", function (event, route1, route2, error) {
            $log.info(arguments);
            model.errors.push(error);
        });

    };

    module.controller("ShellController", ShellController);

}(angular.module("moviesApp")))