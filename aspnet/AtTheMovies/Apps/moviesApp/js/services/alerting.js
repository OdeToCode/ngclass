(function(module) {

    var alerting = function($timeout) {

        var currentAlerts = [];

        var addInfo = function(message) {
            addAlert("info", message);
        };

        var addDanger = function(message) {
            addAlert("danger", message);
        };

        var addAlert = function(type, message) {
            var alert = { type: type, message: message };
            currentAlerts.push(alert);
            $timeout(function() {
                removeAlert(alert);
            }, 10000);
        };

        var errorHandler = function(description) {
            return function () {
                addDanger(description);
            };
        };

        var removeAlert = function(alert) {
            for (var i = 0; i < currentAlerts.length; i++) {
                if (currentAlerts[i] === alert) {
                    currentAlerts.splice(i, 1);
                    break;
                }
            }
        };

        return {
            errorHandler: errorHandler,
            removeAlert: removeAlert,
            addAlert: addAlert,
            addInfo: addInfo,
            addDanger: addDanger,
            currentAlerts: currentAlerts
        };
    };

    module.factory("alerting", alerting);

}(angular.module("moviesApp")));