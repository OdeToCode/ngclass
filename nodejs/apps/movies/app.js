// iife - keep variables out of global scope
(function() {
    var module = angular.module("movies-app", ["ng"]);

    module.config(function() {

    });

    module.config(function() {

    });

    module.run(function($rootScope) {
        $rootScope.version = "1.0";
    });

}());
