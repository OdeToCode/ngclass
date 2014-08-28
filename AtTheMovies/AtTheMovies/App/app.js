(function () {

    var app = angular.module("app", ["ngRoute"]);

    app.config(function($httpProvider, $routeProvider) {
        $httpProvider.defaults.headers.common["X-Custom"] = "foo";

        $routeProvider
            .when("/list", {
                templateUrl: "movieListTemplate.html"
            })
            .when("/create", { templateUrl: "movieCreateTemplate.html" })
            .when("/edit/:id", { templateUrl: "movieEditTemplate.html" })

            //  /edit/7
            /// movieEditController: function($routeParams) { $routeParams.id }

            .otherwise({ redirectTo: "/list" });
    });

    app.run(["$rootScope", function($rootScope) {
        $rootScope.version = angular.version;
        $rootScope.outstandingRequests = 0;
    }]);

}());