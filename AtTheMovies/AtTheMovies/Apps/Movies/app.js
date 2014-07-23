(function() {

    var app = angular.module("atTheMovies", []);

    app.run(function($rootScope) {
        $rootScope.angular = angular;
    });

    app.config(function($httpProvider) {


    });

}());