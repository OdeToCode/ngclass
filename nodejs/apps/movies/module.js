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
        })
        .otherwise({
            redirectTo: "/list"
        });

    });

/* temp
*/
    var TempController = function() {
        var model = this;
        // ...

    };

    module.controller("TempController", TempController);

    module.run(function($rootScope) {
        $rootScope.version = "1.0";
    });

}());
