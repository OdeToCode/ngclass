(function(module) {


    module.config(function($provide) {
        $provide.provider("alerting", function() {

            var timeout = 10000;

            this.setTimeout = function (timeoutValue) {
                timeout = timeoutValue;
            };

            this.$get = function ($timeout) {

                var currentAlerts = [];


                var removeAlert = function (alertToRemove) {
                    return function () {
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
                    $timeout(removeAlert(newAlert), timeout);
                };

                var addWarning = function (message) {
                    addAlert("warning", message);
                };

                var addInfo = function (message) {
                    addAlert("info", message);
                };

                var addError = function (message) {
                    addAlert("danger", message);
                };

                return {
                    addWarning: addWarning,
                    addInfo: addInfo,
                    addError: addError,
                    currentAlerts: currentAlerts
                };
            };
        });
    });

}(angular.module("common")));