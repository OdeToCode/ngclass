(function(module) {

    var alerting = function($timeout) {

        var currentAlerts = [];


        var removeAlert = function (alertToRemove) {
            return function() {
                for (var i = 0; i < currentAlerts.length; i++) {
                    if (currentAlerts[i] === alertToRemove) {
                        currentAlerts.splice(i, 1);
                    }
                }
            };
        };

        var addAlert = function (type, message) {
            var newAlert = { type: type, message: message };
            currentAlerts.push(newAlert);
            $timeout(removeAlert(newAlert), 10000);
        };

        var addWarning = function (message) {
            addAlert("warning", message);
        };

        var addInfo = function(message) {
            addAlert("info", message);
        };

        var addError = function(message) {
            addAlert("danger", message);
        };

        return {
            addWarning: addWarning,
            addInfo: addInfo,
            addError: addError,
            currentAlerts: currentAlerts
        };
    };

    module.factory("alerting", alerting);

}(angular.module("moviesApp")));