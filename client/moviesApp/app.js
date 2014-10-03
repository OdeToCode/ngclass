var app = angular.module("moviesApp",
    ["ngMessages", "ngSanitize", "ngRoute", "ngAnimate"]);

app.config(function($routeProvider) {

    $routeProvider
        .when("/list", {
            templateUrl: "/moviesApp/list.html",
            controller: "MainController as main",
            resolve: {
                movies: [
                    "movieService", function(movieService) {
                        return movieService.getAllMovies();
                    }
                ]
            }
        })
        .when("/detail/:id", { templateUrl: "/moviesApp/details.html" })
        .when("/edit/:id", { templateUrl: "/moviesApp/edit.html" })
        .otherwise({ redirectTo: "/list" });
});


app.value("appConfig", {
    moviesEndpoint: "/api/movies",
    loggingLevel: "verbose"
});

app.run(function($rootScope){

	$rootScope.version = angular.version;
	$rootScope.navTemplate = "moviesApp/nav.html";
});
