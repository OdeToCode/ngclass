(function(module) {

    var workSpinner = function ($log, requestCounter) {
        return {
            template: "<div class='text-center' ng-show='getRequestCounter()'><img src='/Content/ajax-loader.gif'/></div>",
            scope: true,
            link: function(scope) {
                scope.getRequestCounter = function () {
                    $log.info("Getting the request count");
                    return requestCounter.getCounter();
                };
            }
        };
    };

    module.directive("workSpinner", workSpinner);

}(angular.module("moviesApp")));