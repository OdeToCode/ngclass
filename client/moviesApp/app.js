var app = angular.module("moviesApp", ["ngMessages", "ngSanitize"]);

app.value("appConfig", {
    moviesEndpoint: "/api/movies",
    loggingLevel: "verbose"
});

app.run(function($rootScope){

	$rootScope.version = angular.version;
	$rootScope.navTemplate = "moviesApp/nav.html";
});
