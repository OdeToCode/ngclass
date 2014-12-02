(function() {

    var requestCountInterceptor = function($q) {

        var requestCount = 0;

        return {
            getRequestCount: function() {
                return requestCount;
            },

            request: function (config) {
                requestCount += 1;
                return $q.when(config);
            },

            // TODO: hack!
            requestError: function(temp) {
                requestCount -= 1;
                return $q.reject(temp);
            },
            response: function(response) {
                requestCount -= 1;
                return $q.when(response);
            },
            responseError: function (response){ 
                requestCount -= 1;
                return $q.reject(response);
            }
        };
    };

    var module = angular.module("common");
    module.factory("requestCountInterceptor", requestCountInterceptor);
}());