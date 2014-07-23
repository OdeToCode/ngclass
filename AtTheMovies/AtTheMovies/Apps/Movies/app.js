(function() {

    var app = angular.module("atTheMovies", []);


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