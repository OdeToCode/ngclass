angular.module("moviesApp")
    .controller("EditController",
    [
        "movieData", "$routeParams", "$location",
        function (movieData, $routeParams, $location) {

            var model = this;
            var originalMovie = null;

            var onMovie = function(movie) {
                model.movie = movie;
                originalMovie = angular.copy(model.movie);
            }

            model.undo = function() {
                model.movie = angular.copy(originalMovie);
            };

            model.save = function (isValid) {
                if (isValid) {
                    movieData.save(model.movie)
                        .then(function() {
                            $location.path("/details/" + model.movie.id);
                        });
                } else {
                    // ... 
                }
            };

            movieData.getById($routeParams.id)
                     .then(onMovie);

        }
    ]);