(function () {

    var app = angular.module("app", ["ngRoute", "ngAnimate"]);

    app.config(function($httpProvider, $routeProvider) {
        $httpProvider.defaults.headers.common["X-Custom"] = "foo";

        $routeProvider
            .when("/list", {
                templateUrl: "movieListTemplate.html"
            })
            .when("/create", { templateUrl: "movieEditTemplate.html" })
            .when("/edit/:id", { templateUrl: "movieEditTemplate.html" })

            //  /edit/7
            /// movieEditController: function($routeParams) { $routeParams.id }

            .otherwise({ redirectTo: "/list" });
    });

    app.run(["$rootScope", function($rootScope) {
        $rootScope.version = angular.version;
        $rootScope.outstandingRequests = 0;
        $rootScope.greeting = "At The Movies";
    }]);

}());