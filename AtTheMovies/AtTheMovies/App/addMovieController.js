(function() {

    var app = angular.module("app");

    app.controller("addMovieController", function (movieService) {

        var ctrl = {
            movie: {
                title: "",
                length: 90,
                releaseDate: new Date() 
            },
            submit: submit
        };

        return ctrl;

        function submit() {
            movieService.addMovie(ctrl.movie)
                .then(function() {

                });
        }
    });


}());