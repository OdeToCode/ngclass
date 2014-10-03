(function(){

	var app = angular.module("moviesApp");

	var MainController = function (movieService, movies, $timeout,
                                    $location, $sce, loadingService) {

	    var model = this;

	    model.loadTracker = loadingService;
		model.movies = [];
		model.searchTerm = "";
		model.ordering = "-rating";

	    model.counter = 0;

	    model.getHtmlContent = function() {
	        return $sce.trustAsHtml(model.htmltext);
	    };

	    model.goToEdit = function(movie) {
	          $location.path("/edit/" + movie.id);
	        
	    };

		model.getStyles = function(movie){
			return {
				goodTitle: movie.rating > 3
			};
		};

		model.increaseRating = function(movie){
		    movie.rating += 1;
            if (movie.rating > 5) {
                movie.rating = 1;
            }
		};

		model.decreaseRating = function(movie){
			movie.rating -= 1;
		};

	    model.refreshMovies = function() {
	        movieService.getAllMovies()
	            .then(onMovies)
	            .catch(onMoviesError);
	    };

		var onMovies = function(movies) {
			model.movies = movies;
		};

		var onMoviesError = function(response) {
			model.error = response;
		};

	    var incrementCounter = function() {
	        model.counter += 1;
       		$timeout(incrementCounter, 1000);
	    };



	    var initialize = function() {
	        model.movies = movies;
	    };



	    initialize();
	};

	app.controller("MainController", MainController);

}()); // IIFE (Immediately Invoked Function Expression)
      // SEAF (self-executing anonymous function)



