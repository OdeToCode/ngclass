(function () {

    var module = angular.module("moviesApp",
        ["ng", "ngRoute", "ngMessages"]);

    module.run(function($log, $rootScope) {
        $log.info("Up and running!");
        $rootScope.version = angular.version;
    });

    module.config(function($routeProvider) {

        // /api/movies/3
        // /app/movies -> MVC Movies
        // / 
        // routes.MapRoute("spapage", 
                // "/app/{controller}/{path*}", defaults=new { controller="Movies", action="Index"
        // /app/movies/list -> Angular ListController

        $routeProvider.when("/list", {
            templateUrl: "/apps/moviesApp/templates/list.html"
        }).when("/about", {
            templateUrl: "/apps/moviesApp/templates/about.html"  
        }).when("/details/:id", {
                templateUrl: "/apps/moviesApp/templates/details.html"
        }).when("/edit/:id?", {
                templateUrl: "/apps/moviesApp/templates/edit.html"
            })
        .otherwise({
            redirectTo: "/list"
        });
    });

}());