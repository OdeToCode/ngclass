var app = angular.module("moviesApp", []);

app.run(function($rootScope){

	$rootScope.version = angular.version;
});
