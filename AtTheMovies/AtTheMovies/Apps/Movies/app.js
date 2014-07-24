(function() {

    var app = angular.module("atTheMovies", ["ngRoute"]);

    app.config(function($routeProvider) {
        $routeProvider
            .when("/movies", {
                controller: "MovieController as vm",
                templateUrl: "templates/movieList.html"
            })
            .when("/editMovie", {
                controller: "MovieEditController as vm",
                templateUrl: "templates/createMovie.html"
            })
            .otherwise({ redirectTo: "/movies" });
    });

    app.constant("urlConfig", {
        movieApi: "api/movies"
    });

    app.filter("alljson", function() {
        return function(o) {
            return JSON.stringify(o, null, 4);
        }
    });

    app.run(function($rootScope) {
        $rootScope.angular = angular;
    });

}());