(function (module) {

    var alerting = function () {

        var currentAlerts = [];
        var addAlert = function (type, description) {
            currentAlerts.push({
                type: type,
                message: description
            });
        };

        var addInfo = function(description) {
            addAlert("info", description);
        };

        var addError = function(description) {
            addAlert("danger", description);
        };

      

        return {
            addError: addError,
            addInfo: addInfo,
            currentAlerts: currentAlerts
        };

    };

    module.factory("alerting", alerting);

}(angular.module("moviesApp")));
