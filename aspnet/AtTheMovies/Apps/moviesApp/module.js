(function() {

    var module = angular.module("moviesApp",
        ["ng", "ngRoute", "ngMessages"]);

    module.config(function($provide) {
        $provide.decorator("$exceptionHandler", function($delegate, $injector) {
            return function(exception, cause) {
                var alerting = $injector.get("alerting");
                $delegate(exception, cause);
                alerting.addDanger(exception.message);
            };
        });
    });

    module.config(function($routeProvider) {

        $routeProvider
            .when("/list", {
                templateUrl: "/apps/moviesApp/templates/list.html"
            })
            .when("/add", {
                templateUrl: "/apps/moviesApp/templates/add.html"
            })
            .when("/details/:id",
            {
                templateUrl: "/apps/moviesApp/templates/details.html"
            })
            .otherwise({
                redirectTo: "/list"
            });

    });

    module.run(function($rootScope) {
        $rootScope.version = angular.version;
    });

}());

