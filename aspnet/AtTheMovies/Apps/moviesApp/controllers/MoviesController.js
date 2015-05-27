(function() {

    var MoviesController = function() {

        var model = this;

        var sayGoodbye = function() {
            model.message = "Goodbye!";
        };

        model.message = "Hello, World!";
        model.changeMessage = function() {
            sayGoodbye();
        };

    };

    var module = angular.module("moviesApp");
    module.controller("MoviesController", MoviesController);

}());