(function() { 

    var module = angular.module("moviesApp", ["common", "ngRoute", "ngMessages", "ngSanitize"]);

    module.config(function($routeProvider) {
        var routes = [
            {
                url: "/list", settings: {
                    templateUrl: "list.html",
                    controller: "MoviesController as list",
                    resolve: {
                        movies: function (movieService) {
                            return movieService.getAllMovies();
                        }
                    }
                }
            },
            { url: "/details/:id", settings: { templateUrl: "details.html" } },
            { url: "/edit/:id", settings: {templateUrl: "edit.html "}}
        ];

        angular.forEach(routes, function(route) {
            route.settings.templateUrl = "/ngapps/moviesapp/templates/" + route.settings.templateUrl;
            $routeProvider.when(route.url, route.settings);
        });
        $routeProvider.otherwise({ redirectTo: routes[0].url });
    });

    module.config(function ($httpProvider, movieServiceProvider) {
        movieServiceProvider.setRootUrl("/api/movies/");
        $httpProvider.defaults.headers.common["X-Custom"] = "foo";
    });

    module.run(function($rootScope) {
        $rootScope.appVersion = "1.0";
        $rootScope.validationErrors = "/ngapps/moviesApp/templates/validationErrors.html";
        $rootScope.toptemplate = "/ngapps/moviesApp/templates/topdark.html";

        $rootScope.$on("$routeChangeError", function() {
            $rootScope.error = "Could not load this route";
        });

    });

}());
