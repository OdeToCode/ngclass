(function() {

    var module = angular.module("moviesApp", ["ngRoute"]);

    module.config(function($routeProvider) {

        var templateUrl = "/apps/moviesApp/templates/";

        $routeProvider.when("/list", {
            templateUrl: templateUrl + "list.html"
        }).otherwise({
            redirectTo: "/list"
        });


    });

    module.run(function($rootScope) {
        $rootScope.version = "0.0.1";
    });


}());