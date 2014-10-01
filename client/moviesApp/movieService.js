(function(){

	var app = angular.module("moviesApp");

	var movieService = function($http) {

		var endpoint = "/api/movies";

		var getAllMovies = function() {			
			return  $http.get(endpoint)
			            .then(function(response){
			            	return response.data;
			            });
		};

		return {
			getAllMovies: getAllMovies
		};
	};


	app.factory("movieService", movieService);

}());