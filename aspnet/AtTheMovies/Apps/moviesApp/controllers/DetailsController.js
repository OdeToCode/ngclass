angular.module("moviesApp")
    .controller("DetailsController",
    [
        "movieData", "$routeParams",
        function (movieData, $routeParams) {

            var model = this;

            var onMovie = function(movie) {
                model.movie = movie;
            }

            movieData.getById($routeParams.id)
                     .then(onMovie);

        }
    ]);