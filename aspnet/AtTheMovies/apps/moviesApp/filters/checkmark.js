(function() {

    var module = angular.module("moviesApp");

    var checkmark = function() {

        return function(input) {

            if (angular.isDefined(input)) {
                return input ? "\u2713" : "\u2718";
            }
            return input;
        };

    };

    module.filter("checkmark", checkmark);

}());