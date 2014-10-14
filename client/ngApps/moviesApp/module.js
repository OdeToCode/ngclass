(function() { 

    var module = angular.module("moviesApp", ["common", "ngRoute"]);

    module.config(function($routeProvider) {

       
       
        // #/edit/2 -> edit movie 2

        var routes = [
            { url: "/list", settings: { templateUrl: "list.html" } },
            { url: "/details/:id", settings: { templateUrl: "details.html" } }
        ];

        angular.forEach(routes, function(route) {
            route.settings.templateUrl = "/ngapps/moviesapp/templates/" + route.settings.templateUrl;
            $routeProvider.when(route.url, route.settings);
        });
        $routeProvider.otherwise({ redirectTo: routes[0].url });
    });


    module.config(function($httpProvider) {
        $httpProvider.defaults.headers.common["X-Custom"] = "foo";
    });

    module.run(function($rootScope, $log) {
        $rootScope.appVersion = "1.0";

        $rootScope.$on("$routeChangeError", function() {
            $rootScope.error = "Could not load this route";
        });

    });

}());



//-moviesApp
//module.js
// - directives
// - controllers
// - services

//- salesApp
//  module.js
