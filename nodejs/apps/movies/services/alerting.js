(function(module) {
    'use strict';


    function alerting($timeout) {

        var alerts = [];

        function addAlert(type, message) {
            var alert = { type: type, message: message};
            alerts.push(alert);
            $timeout(function() {
                for(var i = 0; i < alerts.length; i++){
                    if(alerts[i] == alert){
                        alerts.splice(i, 1);
                    }
                }
            }, 10000);
        }

        function errorHandler(message) {
            return function(ex) {
                addError(message);
            }
        }


        function addError(message) {
            addAlert("danger", message);
        }

        function addInfo(message) {
            addAlert("info", message);
        }

        return {
            errorHandler: errorHandler,
            addError: addError,
            addInfo: addInfo,
            alerts: alerts
        }

    }

    module.factory("alerting", alerting);

}(angular.module("movies-app")));
