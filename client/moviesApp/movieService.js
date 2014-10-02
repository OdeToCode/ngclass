(function(){

	var app = angular.module("moviesApp");

	var movieService = function ($http, $q, $log, appConfig) {

	    var movies = [];
	    var endpoint = appConfig.moviesEndpoint;

	    var updateMovie = function(movie) {
	        return $http.put(appConfig.moviesEndpoint, movie)
	            .then(function(response) {
	                // response.data
	                return response.data;
	        });
	    };

		var getAllMovies = function() {

		    if (movies.length) {
		        return $q.when(movies);
		    }

		    return $http.get(endpoint)
			            .then(function (response) {
		                    $log.info(response);
		                    movies = response.data;
			                return response.data;
			            });
		};

	    return {
	        getAllMovies: getAllMovies,
	        updateMovie: updateMovie
	};
	};


	app.factory("movieService", movieService);

}());