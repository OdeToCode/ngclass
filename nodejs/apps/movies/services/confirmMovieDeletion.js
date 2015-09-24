(function(module) {
    'use strict';

    function deletionConfirmer($modal) {

        function deleteMovie(movie) {

            var modal = $modal.open({
                templateUrl: "/movies/views/confirmDelete.html",
                controller: function($scope) {
                    $scope.movie = movie;
                    $scope.ok = function() {
                        $scope.$close(movie);
                    };
                    $scope.cancel = function() {
                        $scope.$dismiss();
                    };
                }
            });
            return modal.result;
        }

        return {
            deleteMovie: deleteMovie
        };
    }

    module.factory("deletionConfirmer", deletionConfirmer);

}(angular.module("movies-app")));
