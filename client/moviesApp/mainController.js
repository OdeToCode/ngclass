(function(){

	var app = angular.module("moviesApp");

	app.controller("MainController", function() {
		
		var model = this;
		model.movies = 
		[
			{ title: "Star Wars", rating: 5 },
			{ title: "Neighbors", rating: 3 },
			{ title: "Star Trek", rating: 5 }
		];
		
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
	});

}()); // IIFE (Immediately Invoked Function Expression)
      // SEAF (self-executing anonymous function)