(function() {

    var module = angular.module("moviesApp", [
        "ng", "ngRoute", "ngMessages", "ngSanitize", "common"
    ]);


    module.config(function(alertingProvider) {
        alertingProvider.setTimeout(27000);
    });

    module.config(function($routeProvider) {

        $routeProvider.when("/list", {
            templateUrl: "/apps/AtTheMovies/templates/list.html",
            controller: "ListController as list",
            resolve: {
                movies: function(movieService) {
                    return movieService.getAllMovies();
                }
            }
        }).when("/details/:id", {
            templateUrl: "/apps/AtTheMovies/templates/details.html",
            controller: "DetailsController as details"
        }).when("/edit/:id", {
            templateUrl: "/apps/AtTheMovies/templates/edit.html",
            controller: "EditController as edit"
        }).when("/create", {
            templateUrl: "/apps/AtTheMovies/templates/edit.html",
            controller: "EditController as edit"
        });

        $routeProvider.otherwise({
            redirectTo: "/list"
        });

    });


    module.run(function($rootScope, $http) {
       $rootScope.version = "Version 0.0.1";
    });

}());