//angular.module("moviesApp")
//       .controller("ShellController", function () {

//});


(function () {

    var module = angular.module("moviesApp");

    // ng-controller="ShellController"
    // var controller = new ShellConrtoller();

    var ShellController = function() {

        var model = this;

        model.alert = {
            type: "warning",
            reason: "Unknown",
            message: "Alert from the shell!"
        };

        model.dismissAlert = function() {
            model.alert = null;
        };
        model.alertReason = "Unknown!";
        model.alertMessage = "Alert from the shell!";

    };

    module.controller("ShellController", ShellController);
})();

