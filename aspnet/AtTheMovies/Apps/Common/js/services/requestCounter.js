(function(module) {

    var requestCounter = function($q) {

        var requestCount = 0;

        var request = function (config) {
            requestCount += 1;
            return $q.when(config);
        };

        var response = function(response) {
            requestCount -= 1;
            return $q.when(response);
        };

        var requestError = function(config) {
            requestCount -= 1;
            return $q.reject(config);
        };

        var responseError = function(response) {
            requestCount -= 1;
            return $q.reject(response);
        };

        var getRequestCount = function() {
            return requestCount;
        };

        return {
            request: request,
            requestError: requestError,
            response: response,
            responseError: responseError,
            getRequestCount: getRequestCount
        };
    };

    module.factory("requestCounter", requestCounter);

    module.config(function($httpProvider) {
        $httpProvider.interceptors.push("requestCounter");
    });

}(angular.module("common")))