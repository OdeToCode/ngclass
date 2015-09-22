(function(module) {

    function ShellController($timeout, $scope, $log) {
        var shell = this;

        shell.counter = 0;

        function incrementCounter() {
            shell.counter += 1;
            $timeout(incrementCounter, 1000);
        }
    
        incrementCounter();
    }

    module.controller("ShellController", ShellController);


}(angular.module("movies-app")));
