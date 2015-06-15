
(function (module) {

    var EditController = function (movieData, $routeParams,
                                   alerting, $location) {
        var model = this;


        var onMovie = function(movie) {
            model.movie = movie;
            model.originalMovie = angular.copy(model.movie);
        };

        var onSaveComplete = function(movie) {
            alerting.addInfo("Your movie was saved");
            $location.path("/details/" + movie.id);
        };

        var activate = function() {
            var id = $routeParams.id;
            movieData.getById(id)
                      .then(onMovie)
                     .catch(alerting.handle("Could not retrieve movie"));
        };

        model.undo = function() {
            model.movie = angular.copy(model.originalMovie);
        };

        model.save = function (isValid) {
            if (isValid) {
                movieData.save(model.movie)
                    .then(onSaveComplete);
            } else {
                alerting.addInfo("Your form is invalid");
            }
        };


        activate();

    };

    module.controller("EditController", EditController);

}(angular.module("moviesApp")));
