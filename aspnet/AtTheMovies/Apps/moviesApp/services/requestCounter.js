(function (module) {

    var requestCounter = function ($q) {

        var counter = 0;

        var getRequestCount = function() {
            return counter;
        };

        var request = function(config) {
            counter += 1;
            return $q.when(config);
        };

        var requestError = function(error) {
            counter -= 1;
            return $q.reject(error);
        };

        var response = function(response) {
            counter -= 1;
            return $q.when(response);
        };

        var responseError = function(error) {
            counter -= 1;
            return $q.reject(error);
        };

        return {
            request: request,
            requestError: requestError,
            response: response,
            responseError: responseError,
            getRequestCount: getRequestCount
        };

    };

    module.factory("requestCounter", ["$q", requestCounter]);

    module.config(function($httpProvider) {
        $httpProvider.interceptors.push("requestCounter");
    });


}(angular.module("moviesApp")));
