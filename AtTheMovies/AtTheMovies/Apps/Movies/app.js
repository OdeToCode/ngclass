(function() {

    var app = angular.module("atTheMovies", []);

    app.controller("CountdownController", function($scope, $timeout, $log) {

        var vm = this;
        vm.countdownValue = 10;


        $scope.$watch("count.countdownValue", function (newValue, oldValue) {
            $log.info(newValue);
        
        });

        var decrement = function() {

           

                vm.countdownValue -= 1;
                if (vm.countdownValue > 0) {
                    $timeout(decrement, 1000);
                }
             
        };


        $timeout(decrement, 1000);

    });



    app.run(function($rootScope) {
        $rootScope.angular = angular;
    });


    app.config(function($httpProvider) {


    });

}());