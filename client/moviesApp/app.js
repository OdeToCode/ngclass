var app = angular.module("moviesApp",
    ["ngMessages", "ngSanitize", "ngRoute"]);

app.config(function($routeProvider) {

    $routeProvider
        .when("/list", { templateUrl: "/moviesApp/list.html" })
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
