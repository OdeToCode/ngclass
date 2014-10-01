(function(){

	var app = angular.module("moviesApp");

    app.factory("messageService", function() {

        var message = {
            text: "Hello from messageService"
        };

        return {
            getMessage: function() {
                return message;
            },
            setMessage: function(newMessage) {
                message.text = newMessage;
            }
        };

    });


 

 
	var MainController = function(movieService, $scope, $timeout) {
		
		var model = this;
		model.movies = [];
		model.searchTerm = "";
		model.ordering = "-rating";

	    model.counter = 0;

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
	        movieService.getAllMovies()
		     .then(onMovies, onMoviesError);

            $timeout(incrementCounter, 1000);
	    };



	    initialize();
	};

	app.controller("MainController", MainController);

}()); // IIFE (Immediately Invoked Function Expression)
      // SEAF (self-executing anonymous function)



