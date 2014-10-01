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


    var TestController = function (messageService) {

        //$scope.message = "Hello from Test Controller";
        this.message = messageService.getMessage();
    };

    var NestedController = function (messageService) {

        this.changeMessage = function(newValue) {
            messageService.setMessage(newValue);
        };

    };

    app.controller("NestedController", NestedController);
    app.controller("TestController", TestController);



	var MainController = function(movieService) {
		
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

	    var initialize = function() {
	        movieService.getAllMovies()
		     .then(onMovies, onMoviesError);
	    };

	    initialize();
	};

	app.controller("MainController", MainController);

}()); // IIFE (Immediately Invoked Function Expression)
      // SEAF (self-executing anonymous function)



