(function() {

    var module = angular.module("moviesApp", ["ng", "ngRoute"]);

    module.config(function ($routeProvider) {

        $routeProvider
            .when("/list", {
                templateUrl: "/apps/moviesApp/templates/list.html"
            })
            .when("/details/:id", {})
            .otherwise({redirectTo: "/list"});

    });

    module.run(function($rootScope) {
        $rootScope.version = "1.0";
    });

}());

