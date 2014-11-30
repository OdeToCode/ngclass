(function(module) {

    var httpRequestCount = function() {

        var requestCount = 0;

        var increment = function() {
            requestCount += 1;
        };

        var decrement = function() {
            requestCount -= 1;
        };

        var get = function() {
            return requestCount;
        };


        return {
            incrementRequests: increment,
            decrementRequests: decrement,
            getRequestCount: get
        };
    };

    module.factory("httpRequestCount", httpRequestCount);

}(angular.module("common")));