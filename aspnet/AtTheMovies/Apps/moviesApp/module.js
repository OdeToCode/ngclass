
(function () {

    var module = angular.module("moviesApp",
        ["ng", "ngRoute", "ngMessages"]);

    module.config(function($routeProvider) {

        $routeProvider.when("/list", {
                templateUrl: "/apps/moviesApp/templates/list.html"
            })
            .when("/details/:id", {
                templateUrl: "/apps/moviesApp/templates/details.html"
            })
            .when("/edit/:id", {
                templateUrl: "/apps/moviesApp/templates/edit.html"
            })
            .otherwise({
                redirectTo: "/list"
            });


    });

}());