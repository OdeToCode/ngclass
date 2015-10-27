(function () {
    var module = angular.module("atTheMovies", ["ngRoute"]);

    module.controller("ShellController", function ($timeout) {
        var model = this;
        model.counter = 0;

        function incrementCounter() {
            model.counter += 1;
            $timeout(incrementCounter, 1000);
        };


        $timeout(incrementCounter, 1000);

    });



    module.config(function ($routeProvider) {

        $routeProvider
            .when("/list", {
                templateUrl: "/apps/movies/list/list.html",
                controller: "ListController as list"
            })
            .when("/detail/:id", {
                templateUrl: "/apps/movies/detail/detail.html",
                controller: "DetailController as detail"
            })
            .when("/edit/:id", {
                templateUrl: "/apps/movies/edit/edit.html",
                controller: "EditController as edit"
            })
            .otherwise({
                redirectTo: "/list"
            });

    });

}());