var app = angular.module("moviesApp", ["ngMessages", "ngSanitize"]);

app.config(function($provide) {
    $provide.decorator("$exceptionHandler", function($delegate, $log, $injector) {

        return function(ex, cause) {
            $delegate(ex, cause);
            $log.error(ex);
            alert(ex);

            var http = $injector.get("$http");
            http.post("/api/errors", ex);
        };


    });
});

app.run(function($rootScope){

	$rootScope.version = angular.version;
	$rootScope.navTemplate = "moviesApp/nav.html";
});
