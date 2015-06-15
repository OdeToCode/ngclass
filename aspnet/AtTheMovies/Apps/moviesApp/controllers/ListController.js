(function() {

    // viewmodel
    var ListController = function() {

        var model = this;
        model.message = "Hello, Angular!";

        model.changeMessage = function() {
            model.message = "Changed!";
        };

        model.alert = function(message) {
            alert(message);
        };

    };

    var module = angular.module("moviesApp");
    module.controller("ListController", ListController);

}());