(function() {

    var app = angular.module("app");

    app.config(function ($provide, $httpProvider) {

        $provide.factory("loaderInterceptor", function ($q, $rootScope) {

            var request = function (config) {
                $rootScope.outstandingRequests += 1;
                return $q.when(config);
            };

            var response = function (data) {
                $rootScope.outstandingRequests -= 1;
                return $q.when(data);
            };

            var responseError = function (error) {
                $rootScope.outstandingRequests -= 1;
                return $q.reject(error);
            };

            return {
                request: request,
                response: response,
                responseError: responseError
            };
        });

        $httpProvider.interceptors.push("loaderInterceptor");

    });


}());