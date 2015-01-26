﻿(function() {

    var module = angular.module("moviesApp", ["ng", "ngRoute"]);

    module.config(function ($routeProvider) {

        $routeProvider
            .when("/list", {
                templateUrl: "/apps/moviesApp/templates/list.html"
            })
            .when("/details/:id", {
              templateUrl: "/apps/moviesApp/templates/details.html"  
            }).otherwise({redirectTo: "/list"});

    });

    module.run(function($rootScope) {
        $rootScope.version = "1.0";

        $rootScope.$on("$routeChangeError", function(event, from, to, error) {
            $rootScope.error = error.message;
        });
    });

}());

