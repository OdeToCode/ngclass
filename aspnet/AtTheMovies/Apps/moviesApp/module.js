(function() {

    var module = angular.module("moviesApp",
        ["ng", "common", "ngRoute", "ngMessages",
            "ngSanitize", "ngAnimate", "ui.bootstrap"]);

    module.config(function(movieDataProvider) {
        movieDataProvider.setBaseUrl("/api/movies/");
    });


    module.config(function ($routeProvider) {

        $routeProvider
            .when("/list", {
                templateUrl: "/apps/moviesApp/templates/list.html",
                controller: "MainController as main",
                resolve: {
                    movies: function(movieData) {
                        return movieData.getAll();
                    }
                }
            })
            .when("/details/:id", {
              templateUrl: "/apps/moviesApp/templates/details.html"  
            })
            .when("/edit/:id", {
                templateUrl: "/apps/moviesApp/templates/edit.html"
            })
            .otherwise({ redirectTo: "/list" });

    });

    module.run(function($rootScope) {
        $rootScope.version = "1.0";

        $rootScope.$on("$routeChangeError",
                       function (event, from, to, error) {
            $rootScope.error = error.message;
        });
    });

}());

