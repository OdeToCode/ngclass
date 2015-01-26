(function() {

    var MainController = function() {

        this.changeMessage = function() {
            this.message.greeting = "Hello, Switzerland";
            this.message.currentWeather = "Warming up";
        };

        this.message = {
            greeting: "Hello, World",
            currentWeather: "Cold"
        };

    };

    var app = angular.module("moviesApp");
    app.controller("MainController", MainController);

}());