// iife - keep variables out of global scope
(function() {
    var module = angular.module("movies-app", ["ng", "ngRoute"]);

    module.config(function($routeProvider) {

        $routeProvider.when("/list", {
            templateUrl: "/movies/views/list.html",
            controller: "MovieListController as list",
            resolve: {
                movies: function(movieData) {
                    return movieData.getAllMovies();
                }
            }
        }).when("/detail/:id", {
            templateUrl: "/movies/views/detail.html",
            controller: "MovieDetailController as detail"
        }).when("/edit", {
            templateUrl: "/movies/views/edit.html",
            controller: "MovieEditController as edit"
        })
        .otherwise({
            redirectTo: "/list"
        });

    });

    module.run(function($rootScope) {
        $rootScope.version = "1.0";
    });

}());
