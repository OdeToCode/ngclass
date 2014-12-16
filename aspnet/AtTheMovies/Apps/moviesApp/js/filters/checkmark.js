(function(module) {

    var checkmark = function($log) {

        // {{ model.isGood | checkmark }}
        return function (model) {
            $log.info("Turning " + model + "into a checkmark.");
            return model ? "\u2713" : "\u2718";
        };
    };

    module.filter("checkmark", checkmark);

}(angular.module("moviesApp")));