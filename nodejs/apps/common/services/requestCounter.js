(function(module) {
    'use strict';


    function requestCounter($q) {

        var requestCount = 0;

        function request(config) {
            requestCount += 1;
            return $q.when(config);
        }

        function response(httpResponse) {
            requestCount -= 1;
            return $q.when(httpResponse);
        }

        function requestError(config) {
            requestCount -= 1;
            return $q.reject(config);
        }

        function responseError(httpResponse) {
            requestCount -= 1;
            return $q.reject(httpResponse);
        }

        function getRequestCount() {
            return requestCount;
        }

        return {
            getRequestCount: getRequestCount,
            request: request,
            requestError: requestError,
            response: response,
            responseError: responseError
        };

    }

    module.factory("requestCounter", requestCounter);

    module.config(function($httpProvider){
        $httpProvider.interceptors.push("requestCounter");
    });


}(angular.module("common")));
