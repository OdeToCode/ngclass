(function() {

    var module = angular.module("moviesApp", ["ng", "ngRoute", "ngMessages", "common"]);

   
    module.config(function ($provide, movieDataProvider, $httpProvider) {


        $httpProvider.interceptors.push("requestCountInterceptor");

        movieDataProvider.setBaseUrl("/api/movies");


        $provide.decorator("$exceptionHandler", function($delegate, alerts) {
            return function (error, reason) {
                $delegate(error, reason);
                alerts.addError(error.message);
            };
        });
    });


    module.config(function ($routeProvider) {

        $routeProvider
            .when("/list", {
                templateUrl: "/apps/moviesApp/templates/list.html"
            })
            .when("/details/:id?", {
                templateUrl: "/apps/moviesApp/templates/detail.html" //,
                //can also do controller: "DetailsController as detail"
            })
            .when("/add", {
                templateUrl: "/apps/moviesApp/templates/add.html"
            })
            .otherwise({
                redirectTo: "/list"
            });

    });

    module.run(function($rootScope) {
        $rootScope.version = angular.version;

        $rootScope.$on("$routeChangeError", function(event, route) {
            $rootScope.routeError = "Could not get to " + route.templateUrl;
        });

    });

}());