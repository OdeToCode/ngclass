(function() {

    var module = angular.module("moviesApp");

    var alerts = function() {

        //var $timeout = $injector.get("$timeout");
        var currentAlerts = [];

        var addError = function(error) {

            var alert = {
                type: "warning",
                message: error,
                reason: ""
            };

            currentAlerts.push(alert);
   
        };

        var getAlerts = function() {
            return currentAlerts;
        };

        var closeAlert = function(alert) {
            for (var i = 0; i < currentAlerts.length; i++) {
                if (currentAlerts[i] == alert) {
                    currentAlerts.splice(i, 1);
                }
            }
        };

        return {
            addError: addError,
            getAlerts: getAlerts,
            removeAlert: closeAlert
        };

    };

    module.factory("alerts", alerts);

}());