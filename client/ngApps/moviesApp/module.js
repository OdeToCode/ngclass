(function() { 

    var module = angular.module("moviesApp", ["common"]);

    module.config(function($httpProvider) {
        $httpProvider.defaults.headers.common["X-Custom"] = "foo";
    });

    module.run(function($rootScope, $log) {
        $rootScope.appVersion = "1.0";
       
    });

}());



//-moviesApp
//module.js
// - directives
// - controllers
// - services

//- salesApp
//  module.js
