(function(module) {

    var requestCounter = function($q) {

        var currentRequestCount = 0;

        var request = function(config) {
            currentRequestCount += 1;
            return $q.when(config);
        };

        var error = function(reason) {
            currentRequestCount -= 1;
            return $q.reject(reason);
        };

        var response = function(httpResponse) {
            currentRequestCount -= 1;
            return $q.when(httpResponse);
        };

        var getCount = function() {
            return currentRequestCount;
        };

        return {
            request: request,
            requestError: error,
            response: response,
            responseError: error,
            getCurrentRequestCount: getCount
        };


    };

    module.factory("requestCounter", requestCounter);

    module.config(function($httpProvider) {
        $httpProvider.interceptors.push("requestCounter");
    });


}(angular.module("moviesApp")));