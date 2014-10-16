(function(module) {

    var alertsService = function($injector) {

        var id = 1;
        var alerts = [];


        var removeAlert = function(alert) {
            for (var i = 0; i < alerts.length; i++) {
                if (alerts[i].id == alert.id) {
                    alerts.splice(i, 1);
                }
            }
        };

        var addException = function(exception) {

            var message = "";
            if (exception && exception.message) {
                message = exception.message;
            } else {
                message = exception;
            }

            
            var alert = {
                id: id++,
                message: message,
                type: "danger"
            };

            alerts.push(alert);

            var $timeout = $injector.get("$timeout");
            $timeout(function() {
                removeAlert(alert);
            }, 5000);

        };

        return {
            addException: addException,
            currentAlerts: alerts,
            removeAlert: removeAlert
        };
    };

    module.factory("alerts", alertsService);


}(angular.module("common")));