(function(){

	var app = angular.module("moviesApp");

	app.controller("MainController", function(movieService) {
		
		var model = this;
		model.movies = [];

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

		model.saveNewMovie = function(){
			model.movies.push(model.newMovie);	
			model.newMovie = null;	
		}

		var onMovies = function(movies) {
			model.movies = movies;
		};

		var onMoviesError = function(response) {
			model.error = response;
		};

		movieService.getAllMovies()
		     .then(onMovies, onMoviesError);
	});



}()); // IIFE (Immediately Invoked Function Expression)
      // SEAF (self-executing anonymous function)



