(function(){

	var app = angular.module("moviesApp");

	var MainController = function(movieService, $scope, $timeout, $sce) {
		
	    var model = this;
	    var savedMovie = null;

		model.movies = [];
		model.searchTerm = "";
		model.ordering = "-rating";

	    model.counter = 0;

	    model.getHtmlContent = function() {
	        return $sce.trustAsHtml(model.htmltext);
	    };

	    model.startEdit = function(movie) {
	        savedMovie = angular.copy(movie);
	        model.editableMovie = movie;
	    };

	    model.cancelEdit = function() {
	        angular.extend(model.editableMovie, savedMovie);
	        model.editableMovie = null;
	    };

	    model.saveEdit = function(isValid) {
	        if (isValid) {
	            model.editableMovie = null;

	            // persist this to server
	        }
	    };

		model.getStyles = function(movie){
			return {
				goodTitle: movie.rating > 3
			};
		};

		model.increaseRating = function(movie){
			movie.rating += 1;
		};

		model.decreaseRating = function(movie){
			movie.rating -= 1;
		};

		model.saveNewMovie = function(isValid){
			if(isValid) {
				model.movies.push(model.newMovie);	
				model.newMovie = null;
			}	
		}

	    model.refreshMovies = function() {
	        movieService.getAllMovies()
		     .then(onMovies, onMoviesError);
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
	        model.refreshMovies();

	        throw "oops!";
	    };



	    initialize();
	};

	app.controller("MainController", MainController);

}()); // IIFE (Immediately Invoked Function Expression)
      // SEAF (self-executing anonymous function)



