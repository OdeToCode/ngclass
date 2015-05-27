(function () {

    var module = angular.module("moviesApp", ["ng"]);

    module.run(function($log, $rootScope) {
        $log.info("Up and running!");
        $rootScope.version = angular.version;
    });

    module.config(function() {

    });

}());