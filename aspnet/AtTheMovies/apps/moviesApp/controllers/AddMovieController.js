
angular.module("moviesApp").controller("AddMovieController", function($log, movieData, $location) {

    var model = this;


    var getNewMovie = function() {
        return  {
            title: "",
            rating: 1,
            year: 2015
        };
    };

    var onMovieSaved = function (movie) {
        $location.path("/details/" + movie.id);
        $location.replace(); // keep it out of history
    };

    model.movie = getNewMovie();

    model.clear = function(form) {
        model.movie = getNewMovie();
        form.$setPristine();
    };

    model.saveMovie = function(isValid) {
        if (isValid) {
            movieData.addMovie(model.movie)
                .then(onMovieSaved);
        } 
    };


});
