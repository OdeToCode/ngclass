(function (module) {

    module.config(function ($provide, $httpProvider) {

        $provide.factory("loadingInterceptor", function ($q, httpRequestCount) {

            var request = function (config) {
                httpRequestCount.incrementRequests();
                return $q.when(config);
            };

            var requestError = function (error) {
                httpRequestCount.decrementRequests();
                return $q.reject(error);
            };

            var response = function (httpResponse) {
                httpRequestCount.decrementRequests();
                return $q.when(httpResponse);
            };

            var responseError = function (error) {
                httpRequestCount.decrementRequests();
                return $q.reject(error);
            };

            return {
                request: request,
                requestError: requestError,
                response: response,
                responseError: responseError
            };
        });

        $httpProvider.interceptors.push("loadingInterceptor");
    });

}(angular.module("common")));