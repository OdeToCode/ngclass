(function (module) {

    var alerting = function ($timeout) {

        var currentAlerts = [];

        var removeAlert = function(alert) {
            for (var i = 0; i < currentAlerts.length; i++) {
                if (currentAlerts[i] === alert) {
                    currentAlerts.splice(i, 1);
                }
            }
        };

        var addAlert = function (type, description) {
            var alert = {
                type: type,
                message: description
            };
            currentAlerts.push(alert);

            $timeout(function() {
                removeAlert(alert);
            }, 10000);
        };

        var addInfo = function(description) {
            addAlert("info", description);
        };

        var addError = function(description) {
            addAlert("danger", description);
        };

        var handle = function(description) {
            return function(error) {
                addError(description);
            }
        };

        return {
            addError: addError,
            addInfo: addInfo,
            handle: handle,
            removeAlert: removeAlert,
            currentAlerts: currentAlerts
        };

    };

    module.factory("alerting", alerting);

}(angular.module("moviesApp")));
