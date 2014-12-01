(function() {

    var module = angular.module("moviesApp");

    // ng-controller="MvoieListController"
    // var controller = new MovieListController();
    // {
    //    changeMessage: function() { ... },
    //    greeting: "hello!",
    //    movie: { ... },
    // }
    //

    module.controller("MoviesListController", function () {

        var model = this;
        var movies = [
            {
                title: "Star Wars",
                year: 1979
            },
            {
                title: "Kill Bill",
                year: 2003
            },
            {
                title: "2001",
                year: 1969
            }
        ];

        model.movies = movies;

    });


    //module.controller("MoviesListController", function($scope) {

    //    var movie = {
    //        title: "Star Wars",
    //        year: 1979
    //    }

    //    $scope.changeMessage = function() {
    //        $scope.greeting = "Bonjour!";
    //    };

    //    $scope.greeting = "Hello, World!";
    //    $scope.movie = movie;


    //});

}());