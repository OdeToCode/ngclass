(function() {

    var module = angular.module("moviesApp", ["ngRoute"]);

    module.config(function($routeProvider) {

        var templateUrl = "/apps/moviesApp/templates/";

        $routeProvider.when("/list", {
            templateUrl: templateUrl + "list.html",
            controller: "ListController as list",
            resolve: {
                movies: function(movieData) {
                    return movieData.getAllMovies();
                }
            }
        }).when("/details/:id", {
            templateUrl: templateUrl + "details.html"        
        }).otherwise({
            redirectTo: "/list"
        });


    });

    module.run(function($rootScope, alerting) {
        $rootScope.version = "0.0.1";

        $rootScope.$on("$routeChangeError", function() {

            alerting.addError("Could not change route");


        });

    });


}());