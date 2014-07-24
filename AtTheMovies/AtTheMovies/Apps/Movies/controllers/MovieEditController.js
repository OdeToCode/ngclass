(function() {

    angular.module("atTheMovies")
        .controller("MovieEditController",
                function (movieDataService, $location) {

            var vm = this;

            vm.saveMovie = function () {

                if (this.movieForm.$valid) {
                    movieDataService
                        .insert(vm.newMovie)
                        .then(function(movie) {
                            $location.path("/movies");

                        });
                }
            };

            vm.cancel = function () {
                $location.path("/movies");
            };
    });

}());