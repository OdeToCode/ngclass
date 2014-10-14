(function(module) {

    module.controller("MoviesController", function() {
        var model = this;

        model.message = "Hello World!";

        model.messageStyle = {
            red: true,
            large: true,
        };

        model.changeMessage = function() {
            model.editMessage = true;
            model.messageStyle.red = false;
        };

        model.saveMessage = function(isValid, newMessage) {
            if (isValid) {
                model.message = newMessage;
                model.editMessage = false;
                model.messageStyle.red = true;
            }
        };

        model.movies = [
            { title: "Star Wars", rating: 5 },
            { title: "Star Trek", rating: 4 },
            { title: "Gravity", rating: 3   }
        ];
    });

}(angular.module("moviesApp")));