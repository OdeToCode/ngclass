(function() {

    var app = angular.module("app");

    app.controller("editMovieController", function(movieService, $routeParams,  $location) {

        var ctrl = {
            movie: null,
            errorMessage: "",
            submit: submit
        };

        var id;

        init();
        return ctrl;

        function init() {
            id = $routeParams.id || 0;

            if (id > 0) {
                movieService.getById(id)
                    .then(function(movie) {
                        ctrl.movie = movie;
                    })
                    .catch(onError);
            } else {
                ctrl.movie = {
                    id: 0,
                    title: "",
                    length: 100,
                    releaseDate: "1/1/2014"
                }
            }

        }

        function submit() {
            movieService.save(ctrl.movie)
                .then(function() {
                    $location.path("/list");
                })
                .catch(onError);
        }

        function onError(reason) {
            ctrl.errorMessage = reason;
        }

    });

}());