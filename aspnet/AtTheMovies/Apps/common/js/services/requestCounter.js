(function(module) {

    var requestCounter = function($q) {

        var counter = 0;

        var getCounter = function() {
            return counter;
        };

        var request = function (configuration) {
            counter += 1;
            return $q.when(configuration);
        };

        var requestError = function(configuration) {
            counter -= 1;
            return $q.reject(configuration);
        };

        var response = function(message) {
            counter -= 1;
            return $q.when(message);
        };

        var responseError = function(message) {
            counter -= 1;
            return $q.reject(message);
        }; 
        
        return {
            request: request,
            requestError: requestError,
            response: response,
            responseError: responseError,
            getCounter: getCounter
        };
    };

    module.factory("requestCounter", requestCounter);

}(angular.module("common")));