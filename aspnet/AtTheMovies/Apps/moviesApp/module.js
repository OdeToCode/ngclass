(function() {

    var module = angular.module("moviesApp", ["ng"]);

    module.config(function() {
       
    });

    module.run(function($rootScope) {
        $rootScope.version = "0.0.1";
    });


}());