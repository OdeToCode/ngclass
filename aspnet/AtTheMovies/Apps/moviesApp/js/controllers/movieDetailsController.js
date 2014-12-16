angular.module("moviesApp")
       .controller("movieDetailsController", ["movieData", "$routeParams",
        function(movieData, $routeParams) {
            var model = this;

            var id = $routeParams.id;

            movieData.getMovieById(id)
                .then(function(movie) {
                    model.movie = movie;
                });
        }
    ]);