(function(module) {

    var EditController = function(movieData, $routeParams, $location, alerting) {

        var model = this;
        var id = $routeParams.id;

        function onMovie(movie) {
            model.movie = movie;
        }

        function goToDetails(movie) {
            alerting.addInfo("Your movie was saved!");
            $location.path("/detail/" + movie.id);
        }

        model.saveMovie = function(isValid) {
            if (isValid) {
                movieData.save(model.movie)
                         .then(goToDetails);
            }
        }

        movieData.getById(id)
            .then(onMovie);

    }

    module.controller("EditController", EditController);

}(angular.module("atTheMovies")));