//angular.module("moviesApp")
//       .controller("ShellController", function () {

//});


(function () {

    var module = angular.module("moviesApp");

    // ng-controller="ShellController"
    // var controller = new ShellConrtoller();

    var ShellController = function() {

        var model = this;

        model.message = "Hello, World!";

        model.changeMessage = function () {
            model.message = "Hello, SDD";
        };

    };

    module.controller("ShellController", ShellController);
})();

