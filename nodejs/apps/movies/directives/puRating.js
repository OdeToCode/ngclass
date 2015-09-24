(function(module) {
    'use strict';

    function puRating() {
        return {
            restrict: "EA",
            controller: "puRatingController",
            templateUrl: "/movies/directives/puRating.html",
            scope: {
                value: "="
            },
            link: function(scope, element) {

            }
        };
    }

    function puRatingController($scope) {
        $scope.stars = [1,2,3,4,5];

        $scope.setRating = function(newRating) {
            $scope.value = newRating;
        };

        $scope.getClass = function(starValue) {

            var isStarred = starValue <= $scope.value;

            return {
                "glyphicon": true,
                "glyphicon-star": isStarred,
                "glyphicon-star-empty": !isStarred
            };
        };
    }

    module.controller("puRatingController", puRatingController);
    module.directive("puRating", puRating);

}(angular.module("movies-app")));
