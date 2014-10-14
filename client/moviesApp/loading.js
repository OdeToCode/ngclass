(function () {

    var app = angular.module("moviesApp");

    var loadingService = function () {
        var outstandingRequests = 0;
        return {
            getRequestCount: function () {
                return outstandingRequests;
            },
            incrementRequestCount: function() {
                outstandingRequests += 1;
            },
            decrementRequestCount: function() {
                outstandingRequests -= 1;
            }

        }
    };
    app.factory("loadingService", loadingService);

    var loadingInterceptor = function ($q, loadingService) {
        return {
            request: function (config) {
                loadingService.incrementRequestCount();
                return config;
            },
            response: function (response) {
                loadingService.decrementRequestCount();
                return response;
            },
            responseError: function (response) {
                loadingService.decrementRequestCount();
                $q.reject(response);
            }
        }
    };

    app.config(function ($httpProvider) {
        $httpProvider.interceptors.push(loadingInterceptor);
    });



}());