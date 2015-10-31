(function(module) {

    function alerting($timeout) {

        var currentAlerts = [];

        function closeAlert(alert) {
            for (var i = 0; i < currentAlerts.length; i++) {
                if (currentAlerts[i] === alert) {
                    currentAlerts.splice(i, 1);
                }
            }
        }

        function addAlert(type, message) {

            var alert = {
                type: type,
                message: message
            };
            currentAlerts.push(alert);

            $timeout(function() {
                for (var i = 0; i < currentAlerts.length; i++) {
                    if (currentAlerts[i] === alert) {
                        currentAlerts.splice(i, 1);
                    }
                }
            }, 5000);
        }

        function addInfo(message) {
            addAlert("info", message);
        }

        function addError(message) {
            addAlert("danger", message);
        }

  
        return {
            closeAlert: closeAlert,
            addInfo: addInfo,
            addError: addError,
            currentAlerts: currentAlerts
        };
    }

    module.factory("alerting", alerting);


}(angular.module("atTheMovies")));