(function() {

    var module = angular.module("moviesApp", ["ng"]);

    module.config(function($httpProvider) {
        //$http.get("/api/currentuser");
    });


    module.run(function($rootScope, $http) {
       $rootScope.version = "Version 0.0.1";
    });

}());