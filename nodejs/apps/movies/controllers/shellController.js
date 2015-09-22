(function(module) {

    function ShellController($timeout, $scope, $log) {
        var shell = this;

        shell.counter = 0;

        function incrementCounter() {
            shell.counter += 1;
            $timeout(incrementCounter, 1000);
        }

        shell.things = [];

        shell.add = function() {
            var title = "Thing" + (shell.things.length + 1);
            shell.things.push({
                title: title
            });
        };


        incrementCounter();
    }

    module.controller("ShellController", ShellController);


}(angular.module("movies-app")));
