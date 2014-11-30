(function(module) {

    var checkmark = function() {
        return function(input) {
            return input ? "\u2713" : "\u2718";
        };
    };

    module.filter("checkmark", checkmark);

}(angular.module("moviesApp")));