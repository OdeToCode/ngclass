(function() {

    var app = angular.module("atTheMovies", []);

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


    app.config(function($httpProvider) {


    });

}());