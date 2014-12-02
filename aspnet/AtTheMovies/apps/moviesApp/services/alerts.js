(function() {

    var module = angular.module("moviesApp");

    var alerts = function() {

        //var $timeout = $injector.get("$timeout");
        var currentAlerts = [];

        var addError = function(error) {

            var alert = {
                type: "warning",
                message: error
            };

            currentAlerts.push(alert);
            
    
        };

        var getAlerts = function() {
            return currentAlerts;
        };

        return {
            addError: addError,
            getAlerts: getAlerts
        };

    };

    module.factory("alerts", alerts);

}());