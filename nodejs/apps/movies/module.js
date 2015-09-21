// iife - keep variables out of global scope
(function() {
    var module = angular.module("movies-app", ["ng", "ngRoute"]);

    module.config(function($routeProvider) {

        $routeProvider.when("/list", {
            templateUrl: "/movies/views/list.html"
        })
        .otherwise({
            redirectTo: "/list"
        });

    });

    module.run(function($rootScope) {
        $rootScope.version = "1.0";
    });

}());
