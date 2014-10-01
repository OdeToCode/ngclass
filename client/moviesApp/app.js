var app = angular.module("moviesApp", ["ngMessages"]);

app.run(function($rootScope){

	$rootScope.version = angular.version;
	$rootScope.navTemplate = "moviesApp/nav.html";
});
