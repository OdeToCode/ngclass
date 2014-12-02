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

    
    module.constant("")

    module.value("userProfile", { name: "Scott", loggedIn: false });

    module.service("alerts", alerts);
    var service = new alerts();

    // var alerts = function(){
    //   this.addAlert= function() { ... }
    // }


    module.factory("alerts", alerts);
    var service = alerts();

    // var alerts= function() {
    //    return { addAlert: function() { } };
    // }

}());