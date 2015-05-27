(function () {

    var module = angular.module("moviesApp", ["ng", "ngRoute"]);

    module.run(function($log, $rootScope) {
        $log.info("Up and running!");
        $rootScope.version = angular.version;
    });

    module.config(function($routeProvider) {

        // /api/movies
        // /app/movies -> MVC Movies
        // /app/movies/#/list -> Angular ListController

        $routeProvider.when("/list", {
            templateUrl: "/apps/moviesApp/templates/list.html"
        }).when("/about", {
            templateUrl: "/apps/moviesApp/templates/about.html"  
        }).when("/details/:id", {
                templateUrl: "/apps/moviesApp/templates/details.html"
        })
        .otherwise({
            redirectTo: "/list"
        });
    });

}());