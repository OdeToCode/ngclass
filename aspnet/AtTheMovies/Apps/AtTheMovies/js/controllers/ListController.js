
(function () {

    var ListController = function () {

        var model = this;

        model.message = "Hello, from ListController using 'controller as' syntax";
        model.resetMessage = function (newMessage) {
            model.message = newMessage;
        }

    };

    var module = angular.module("moviesApp");
    module.controller("ListController", ListController);


}());