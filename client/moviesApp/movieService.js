(function(){

	var app = angular.module("moviesApp");

	var movieService = function($http, $q, $log) {

	    var movies = [];
		var endpoint = "/api/movies";

		var getAllMovies = function() {

		    $log.info("getting movies");
            
		    if (movies.length) {
		        return $q.when(movies);
		    }

		    return $http.get(endpoint)
			            .then(function(response) {
		                    movies = response.data;
			                return response.data;
			            });
		};

		return {
			getAllMovies: getAllMovies
		};
	};


	app.factory("movieService", movieService);

}());