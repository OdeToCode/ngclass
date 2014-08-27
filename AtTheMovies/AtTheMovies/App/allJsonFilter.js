(function() {

    var app = angular.module("app");


    app.filter("allJson", function() {
        return function(object) {
            return JSON.stringify(object, null, 4);
        }
    });

}());