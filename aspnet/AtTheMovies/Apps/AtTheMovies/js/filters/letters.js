(function(module) {

    var letters = function($log) {

        return function(value) {
            $log.info(value);
            return value;
        };

    };

    module.filter("letters", letters);

}(angular.module("moviesApp")));