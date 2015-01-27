(function(module) {

    var stars = function($log) {

  
        return function (value) {
            var result = "";
            $log.info("Converting to stars:" + value);
            for (var i = 0; i < value; i++) {
                result += "*";
            }
            return result;
        }
    };

    module.filter("stars", stars);


}(angular.module("moviesApp")))