(function () {

    var app = angular.module("app", []);

    app.config(function($httpProvider) {
        $httpProvider.defaults.headers.common["X-Custom"] = "foo";
    });

    app.run(["$rootScope", function($rootScope) {
        $rootScope.version = angular.version;
    }]);

}());