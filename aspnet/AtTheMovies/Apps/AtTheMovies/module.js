(function() {

    var module = angular.module("moviesApp", ["ng", "ngRoute", "ngMessages"]);

    module.config(function($routeProvider) {

        $routeProvider.when("/list", {
            templateUrl: "/apps/AtTheMovies/templates/list.html",
            controller: "ListController as list"
        }).when("/details/:id", {
            templateUrl: "/apps/AtTheMovies/templates/details.html",
            controller: "DetailsController as details"
        }).when("/edit/:id", {
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